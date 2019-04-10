import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-duck-update',
  templateUrl: './duck-update.component.html',
  styleUrls: ['./duck-update.component.css']
})
export class DuckUpdateComponent implements OnInit {
  id: number;

  constructor(private service: RequestService, private router: Router, private arouter: ActivatedRoute) { }

  ngOnInit() {
    this.arouter.params.subscribe(params => {this.id = +params['id']; });
  }
  updateDuck(duck) {
    this.service.updateDuck(JSON.stringify(duck), this.id)
      .subscribe(response => response, error => error);
    this.router.navigate(['/home/duck/' + this.id]);
  }

}
