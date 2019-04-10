import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../../events/event';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  time: string;
  date: string;
  id: number;
  returnUrl: string;
  constructor( private service: RequestService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home/my-events';
    this.route.params.subscribe(params => {this.id = +params['id']; });
    this.service.getEvent(this.id).subscribe(event => {
      this.event = event;
      let dt = this.event.date.split(' ', 2);
      let dat = dt[0].split('-', 3);
      let t =  dt[1].split(':',3);
      this.time = t[0] + ':' + t[1];
      this.date = dat[2] + '.' + dat[1] + '.' + dat[0];
    });
  }
  printDate(date: string) {
    return this.date;
  }
  printTime(time: string) {
    return this.time;
  }
  back() {
    this.router.navigate([this.returnUrl]);
  }
}
