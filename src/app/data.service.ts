import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = new BehaviorSubject<string>('HOlA MUNDO');
  public $data = this.data.asObservable();

  constructor() {}
}
