import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  title = 'rubber ducks\' fan club';
  constructor( private router: Router, private authService: AuthService ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }
}
