import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {RequestService} from '../request.service';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  title = 'My account';
  user: User;
  date: string;
  constructor(private service: RequestService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.user = new User;
  }

  ngOnInit() {
    this.service.getUser().subscribe(user => {
      this.user = user;
      let dt = this.user.birthDate.split(' ', 2);
      let dat = dt[0].split('-', 3);
      this.date = dat[2] + '.' + dat[1] + '.' + dat[0];
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  printDate(date: string) {
    return this.date;
  }

}
