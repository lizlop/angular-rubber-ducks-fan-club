import { Component, OnInit } from '@angular/core';
import {Duck} from '../duck';
import {RequestService} from '../request.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FeatureSet} from '../featureSet';

@Component({
  selector: 'app-duck-detail',
  templateUrl: './duck-detail.component.html',
  styleUrls: ['./duck-detail.component.css']
})
export class DuckDetailComponent implements OnInit {
  duck: Duck;
  id: number;
  swimSk;
  constructor(private service: RequestService, private router: Router, private route: ActivatedRoute) {
    this.duck = new Duck();
    this.duck.featureSet = new FeatureSet();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']; });
    this.service.getDuck(this.id).subscribe(duck => {
      this.duck = duck;
      this.swimSk = Array(this.duck.featureSet.swimmingSkill).fill(1);
    });
  }
  deleteDuck() {
    this.service.deleteDuck(this.id).subscribe(response => response, error => error);
    this.router.navigate(['/home/my-ducks']);
  }

}
