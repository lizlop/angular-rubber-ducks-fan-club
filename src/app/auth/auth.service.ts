import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:5000/api';
  token;
  access = false;

  constructor(/*private http: HttpClient,*/ private router: Router) { }
  login(username: string, password: string) {
    /*this.http.post(this.uri + '/auth', {username: username, password: password})
      .subscribe((resp: any) => {
        // this.router.navigate(['profile']);
        localStorage.setItem('token', resp.token);
      });*/
    this.router.navigate(['home']);
    this.access = (username != null && password != null);
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get isLogedIn(): boolean {
    // return (localStorage.getItem('token') !== null);
    return this.access;
  }
}
