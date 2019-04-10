import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {RequestService} from '../request.service';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  title = 'My account';
  user: User;
  constructor(private service: RequestService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.service.getUser(1).subscribe(user => this.user = user);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
