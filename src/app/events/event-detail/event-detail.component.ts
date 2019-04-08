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
  constructor() {}
  ngOnInit() {}
}
