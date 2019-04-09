import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {EVENTS} from './mock-events';
import {Observable, of} from 'rxjs';
import { Event } from './event';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'app/heroes'; // URL to web api

  constructor(private http: HttpClient) {}

 getEvents(): Observable<Event[]> {
    return of(EVENTS);
    /*return this.http
      .get<Event[]>(this.eventsUrl)
      .pipe(map(data => data), catchError(this.handleError));*/
  }

  getEvent(id: number): Observable<Event> {
    return this.getEvents().pipe(
      map(events => events.find(event => event.id === id))
    );
  }

  /*save(event: Event) {
    if (event.id) {
      return this.put(event);
    }
    return this.post(event);
  }

  delete(event: Event) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.eventsUrl}/${event.id}`;

    return this.http.delete<Event>(url).pipe(catchError(this.handleError));
  }

  // Add new Event
  private post(event: Event) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Event>(this.eventsUrl, event)
      .pipe(catchError(this.handleError));
  }

  // Update existing Event
  private put(event: Event) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.eventsUrl}/${event.id}`;

    return this.http.put<Event>(url, event).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }*/
}
