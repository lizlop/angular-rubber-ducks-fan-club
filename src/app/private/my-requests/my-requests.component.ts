import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {SimpleRequest} from '../request';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  requests: SimpleRequest[];

  constructor(private service: RequestService) { }

  ngOnInit() {
    this.service.getRequests().subscribe(req => this.requests = req );
  }

}
