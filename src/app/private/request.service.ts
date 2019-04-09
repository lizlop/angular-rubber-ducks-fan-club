import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {USERS} from './mock-user';
import {User} from './user';
import {map} from 'rxjs/operators';
import {Duck} from './duck';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DUCKS} from './duck-mock';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.username;
  }
  getUsers(): Observable<User[]> {
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id))
    );
  }
  getDucks(): Observable<Duck[]> {
    return of(DUCKS);
    /*return this.http.get(Config.baseUrl + Config.ducksUrl)
      .pipe(map (data => data));*/
  }
  getDuck(id: number): Observable<Duck> {
    return this.getDucks().pipe(
      map(ducks => ducks.find(duck => duck.id === id))
    );
  }
}
