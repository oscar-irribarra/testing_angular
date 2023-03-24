import { Post } from './post';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  _http = inject(HttpClient);

  getPosts() {
    return this._http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((response) => response.slice(1, 10)));
  }
}
