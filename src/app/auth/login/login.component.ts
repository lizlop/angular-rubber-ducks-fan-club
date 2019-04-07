import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Welcome!';
  username;
  password;
  constructor(private authService: AuthService) { }
  onSubmit() {
    // check form
    this.authService.login(this.username, this.password);
  }
  ngOnInit() {
    this.username = '';
    this.password = '';
  }
}
