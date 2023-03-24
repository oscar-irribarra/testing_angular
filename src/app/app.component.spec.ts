import { CommentsService } from './comments.service';
import { PostService } from './post.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let postServiceSpy: jasmine.SpyObj<PostService>;
  let commentServiceSpy: jasmine.SpyObj<CommentsService>;

  const postMock = [
    {
      userId: 1,
      id: 2,
      title: 'qui e esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
  ];

  const commentMock = [
    {
      postId: 1,
      id: 12,
      name: 'modi ut eos dolores illum nam dolor',
      email: 'Oswald.Vandervort@leanne.org',
      body: 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit',
    },
    {
      postId: 2,
      id: 13,
      name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
      email: 'Kariane@jadyn.tv',
      body: 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et',
    },
  ];

  beforeEach(async () => {
    postServiceSpy = jasmine.createSpyObj('PostService', ['getPosts']);
    postServiceSpy.getPosts.and.returnValue(of(postMock));

    commentServiceSpy = jasmine.createSpyObj('CommentsService', [
      'getComments',
    ]);
    commentServiceSpy.getComments.and.returnValue(of(commentMock));

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PostService, useValue: postServiceSpy },
        { provide: CommentsService, useValue: commentServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'upload_progress'`, () => {
    expect(component.title).toEqual('upload_progress');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'upload_progress app is running!'
    );
  });

  it('should can get posts', () => {
    expect(component.posts).toEqual(postMock);
  });

  it('should render post', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.posts li')[1]?.textContent).toContain(
      postMock[1].title
    );
  });

  it('should can get comments', () => {
    expect(component.posts).toEqual(postMock);
  });

  it('should render comment', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.comments li')[1]?.textContent).toContain(
      commentMock[1].name
    );
  });
});
