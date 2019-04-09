import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from './user';
import {Config} from '../config';
import {AuthUser} from './auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = Config.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }
  addUser(user: User): boolean {
    this.http.post<any>(this.uri + Config.registerUrl, JSON.stringify(user), this.httpOptions)
      .subscribe(response => {
        return response.status === 200;
      });
    return false;
  }
  isLogedIn(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  login(user: User) {
    return this.http.post<any>(this.uri + Config.loginUrl, JSON.stringify(user), this.httpOptions)
      .pipe(map(data => {
        let token = data['token'];
        // login successful if there's a jwt token in the response
        if (token) {
          let auser = new AuthUser();
          auser.token = token;
          auser.username = user.username;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(auser));
        }
        return token;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
