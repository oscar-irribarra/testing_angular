import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsService } from './comments.service';
import { PostService } from './post.service';
import {
  Component,
  inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Post } from './post';
import { NgFor } from '@angular/common';
import { Comment } from './comment';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgFor, PostsComponent, CommentsComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  _postService = inject(PostService);
  _dataService = inject(DataService);
  title: string = 'upload_progress';
  posts: Post[] = [];
  comments: Comment[] = [];

  constructor(private _commentService: CommentsService) {}

  ngOnInit() {
    this._postService.getPosts().subscribe((response) => {
      this.posts = response;
    });

    this._commentService.getComments().subscribe((response) => {
      this.comments = response;
    });

    this._dataService.$data.subscribe((response) => {
      console.log(response);
    });

    //ng g c comments --standalone --inline-style --inline-template
  }
}
