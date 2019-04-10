import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-duck-add',
  templateUrl: './duck-add.component.html',
  styleUrls: ['./duck-add.component.css']
})
export class DuckAddComponent implements OnInit {

  constructor(private service: RequestService, private router: Router) { }

  ngOnInit() {
  }

  addDuck(duck) {
    this.service.addDuck(JSON.stringify(duck))
      .subscribe(response => response, error => error);
    this.router.navigate(['/home/my-ducks']);
  }
}
