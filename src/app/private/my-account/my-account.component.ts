import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  title = 'My account';
  user: User;
  constructor(private service: RequestService) { }

  ngOnInit() {
    this.service.getUser(1).subscribe(user => this.user = user);
  }

}
