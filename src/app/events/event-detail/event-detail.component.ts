import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {EventService} from '../event.service';
import {switchMap} from 'rxjs/operators';
import { Event } from '../event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  id: number;
  constructor( private service: EventService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']; });
    this.service.getEvent(this.id).subscribe(event => this.event = event);
  }
}
