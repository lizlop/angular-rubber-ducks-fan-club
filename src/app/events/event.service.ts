import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {EVENTS} from './mock-events';
import {Observable, of} from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(EVENTS);
  }

  getEvent(id: number | string) {
    return this.getEvents().pipe(
      // (+) before `id` turns the string into a number
      map((events: Event[]) => events.find(event => event.id === +id))
    );
  }
}
