import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {SimpleEvent} from '../../events/event';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  events: SimpleEvent[];
  constructor(private service: RequestService) { }

  ngOnInit() {
    this.service.getEvents().subscribe(events => this.events = events );
  }
  printDate(date: string) {
    let dt = date.split(' ', 2);
    let dat = dt[0].split('-', 3);
    date = dat[2] + '.' + dat[1] + '.' + dat[0];
    return date;
  }
  printTime(time: string) {
    let dt = time.split(' ', 2);
    let t =  dt[1].split(':',3);
    time = t[0] + ':' + t[1];
    return time;
  }

}
