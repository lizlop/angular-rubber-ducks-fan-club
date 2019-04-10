import { Component, OnInit } from '@angular/core';
import {Duck} from '../duck';
import {RequestService} from '../request.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-duck-detail',
  templateUrl: './duck-detail.component.html',
  styleUrls: ['./duck-detail.component.css']
})
export class DuckDetailComponent implements OnInit {
  duck: Duck;
  id: number;
  constructor(private service: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']; });
    this.service.getDuck(this.id).subscribe(duck => this.duck = duck);
  }

}
