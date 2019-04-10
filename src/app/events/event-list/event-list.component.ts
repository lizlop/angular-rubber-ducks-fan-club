import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import { SimpleEvent } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: SimpleEvent[];
  selectedId: number;

  constructor(
    private service: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    this.service.getEvents().subscribe(events => this.events = events);
  }
}
