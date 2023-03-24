import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment } from '../comment';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="comments">
      <ul>
        <li *ngFor="let comment of comments">{{ comment.name }}</li>
      </ul>
    </div>
  `,
})
export class CommentsComponent {
  @Input() comments: Comment[] = [];
}
