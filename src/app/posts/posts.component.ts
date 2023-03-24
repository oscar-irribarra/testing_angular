import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="posts">
    <ul>
      <li *ngFor="let post of posts">{{ post.title }}</li>
    </ul>
  </div>`,
})
export class PostsComponent {
  @Input() posts: Post[] = [];
}
