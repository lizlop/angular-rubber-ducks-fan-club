import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import { Event } from '../event';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];
  selectedId: number;

  constructor(
    private service: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    of(this.service.getEvents()).subscribe(events => this.events = events);
  }
}
