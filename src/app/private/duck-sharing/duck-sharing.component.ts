import { Component, OnInit } from '@angular/core';
import {DuckSimple} from '../duck';
import {RequestService} from '../request.service';
import {errorComparator} from 'tslint/lib/verify/lintError';
import {User} from '../user';
import {RequestedUser, SendRequest} from '../request';

@Component({
  selector: 'app-duck-sharing',
  templateUrl: './duck-sharing.component.html',
  styleUrls: ['./duck-sharing.component.css']
})
export class DuckSharingComponent implements OnInit {
  title = 'Duck Sharing';
  error: string;
  user: User;
  ducks: DuckSimple[];
  constructor(private service: RequestService) { }

  ngOnInit() {
    this.error = '';
    this.service.getAccessibleDucks().subscribe( ducks => this.ducks = ducks);
    this.service.getUser().subscribe( user => this.user = user);
  }
  sendRequest(id: number) {
    this.error = '';
    if (this.user.email === 'null' && !(this.user.email.toString().match('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}')) ) {
      this.error = 'You should add your e-mail in the account settings to send requests';
      return;
    }
    let ruser = new RequestedUser();
    ruser.nickname = this.user.nickname;
    ruser.email = this.user.email;
    let request = new SendRequest();
    request.isApproved = 'false';
    request.user = ruser;
    this.service.addRequest(JSON.stringify(request), id).subscribe(response => console.log(response), error => console.log(error));
  }
}
