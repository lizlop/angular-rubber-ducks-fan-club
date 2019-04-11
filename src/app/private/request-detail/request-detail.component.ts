import { Component, OnInit } from '@angular/core';
import {Duck} from '../duck';
import {RequestService} from '../request.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FeatureSet} from '../featureSet';
import {FullRequestedUser, Request, RequestedDuck} from '../request';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request;
  id: number;
  constructor(private service: RequestService, private router: Router, private route: ActivatedRoute) {
    this.request = new Request();
    this.request.user = new FullRequestedUser();
    this.request.duck = new RequestedDuck();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']; });
    this.service.getRequest(this.id).subscribe(request => {
      this.request = request;
    });
  }
}
