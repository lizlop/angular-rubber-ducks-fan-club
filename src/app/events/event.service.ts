import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {SimpleEvent} from './event';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Config} from '../config';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'app/heroes'; // URL to web api

  constructor(private http: HttpClient) {}

  getEvents(): Observable<SimpleEvent[]> {
    return this.http.get(Config.baseUrl + Config.eventsUrl)
      .pipe(map(res => {
          if (res instanceof Array) {
            return res.map( event => {
                let ev = new SimpleEvent();
                ev.id = event.id;
                ev.name = event.name;
                ev.date = event.date;
                ev.cost = event.cost;
                console.log(event.isClubOnly);
                ev.isClubOnly = event.isClubOnly === 'true';
                ev.maxPeople = event.maxPeople;
                return ev;
              }
            );
          }
        }
      ));
  }
}
