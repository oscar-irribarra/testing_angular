import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private _http: HttpClient) {}

  getComments() {
    return this._http
      .get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .pipe(map((response: Comment[]) => response.slice(1, 5)));
  }
}
