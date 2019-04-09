import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {USERS} from './mock-user';
import {User} from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  getUsers(): Observable<User[]> {
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id))
    );
  }
}
