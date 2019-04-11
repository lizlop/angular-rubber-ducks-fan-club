import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {first, map} from 'rxjs/operators';
import {Duck, DuckSimple} from './duck';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../config';
import {FeatureSet} from './featureSet';
import {SimpleEvent, Event} from '../events/event';
import {SimpleRequest, Request} from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'text/plain'
    })
  };
  httpJsonOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  registerToEvent(id: number): Observable<any> {
    return this.http.get(Config.baseUrl + Config.eventRegisterUrl + id, this.httpOptions)
      .pipe(first());
  }
  getAccessibleDucks(): Observable<DuckSimple[]> {
    return this.http.get(Config.baseUrl + Config.ducksAccessibleUrl, this.httpOptions)
      .pipe(map(res => {
        if (res instanceof Array) {
          return res.map( duck => {
              let d = new DuckSimple();
              d = duck;
              return d;
            }
          );
        }
      }));
  }
  getRequest(id: number): Observable<Request> {
    return this.http.get<Request>(Config.baseUrl + Config.requestUrl + id)
      .pipe(map( res => {
        let r = new Request();
        r = res;
        return r;
      }));
  }
  getRequests(): Observable<SimpleRequest[]> {
    return this.http.post(Config.baseUrl + Config.userRequestsUrl, this.getUsername(), this.httpOptions)
      .pipe(map(res => {
        if (res instanceof Array) {
          return res.map( req => {
              let d = new SimpleRequest();
              d.id = req.id;
              d.isApproved = req.isApproved;
              return d;
            }
          );
        }
      }));
  }
  addRequest(body: string, id: number) {
    return this.http.post(Config.baseUrl + Config.requestAddUrl + id, body, this.httpJsonOptions)
      .pipe(first());
  }
  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.username;
  }
  getUser(): Observable<User> {
    return this.http.get<User>(Config.baseUrl + Config.userUrl, this.httpOptions)
      .pipe(map( res => {
        let d = new User();
        d = res;
        return d;
      }));
  }
  updateUser(body: string, id: number) {
    return this.http.post(Config.baseUrl + Config.userUpdateUrl + id, body, this.httpJsonOptions)
      .pipe(first());
  }
  getDucks(): Observable<DuckSimple[]> {
    return this.http.post(Config.baseUrl + Config.ducksUrl, this.getUsername(), this.httpOptions)
      .pipe(map(res => {
        if (res instanceof Array) {
          return res.map( duck => {
              let d = new DuckSimple();
              d.id = duck.id;
              d.name = duck.name;
              d.description = duck.description;
              d.accessibility = duck.accessibility;
              return d;
            }
          );
        }
        }
      ));
  }
  addDuck(body: string) {
    return this.http.post(Config.baseUrl + Config.duckAddUrl, body, this.httpJsonOptions)
      .pipe(first());
  }
  updateDuck(body: string, id: number) {
    return this.http.post(Config.baseUrl + Config.duckUpdateUrl + id, body, this.httpJsonOptions)
      .pipe(first());
  }
  getDuck(id: number) {
    return this.http.get<Duck>(Config.baseUrl + Config.duckUrl + id, this.httpOptions)
      .pipe(map(res => {
        let duck = new Duck();
        duck.id = res.id;
        duck.name = res.name;
        duck.description = res.description;
        duck.accessibility = res.accessibility;
        let f = new FeatureSet();
        duck.featureSet = f;
        duck.featureSet.gender = res.featureSet.gender;
        duck.featureSet.colour = res.featureSet.colour;
        duck.featureSet.beakColour = res.featureSet.beakColour;
        duck.featureSet.length = res.featureSet.length;
        duck.featureSet.weight = res.featureSet.weight;
        duck.featureSet.swimmingSkill = res.featureSet.swimmingSkill;
        return duck;
      }));
  }
  deleteDuck(id: number) {
    return this.http.get(Config.baseUrl + Config.duckDeleteUrl + id, this.httpOptions)
      .pipe(first());
  }
  getEvents(): Observable<SimpleEvent[]> {
    return this.http.post(Config.baseUrl + Config.userEventsUrl, this.getUsername(), this.httpOptions)
      .pipe(map(res => {
          if (res instanceof Array) {
            return res.map( event => {
                let ev = new SimpleEvent();
                ev.id = event.id;
                ev.name = event.name;
                ev.date = event.date;
                ev.cost = event.cost;
                ev.isClubOnly = event.isClubOnly === 'true';
                ev.maxPeople = event.maxPeople;
                return ev;
              }
            );
          }
        }
      ));
  }
  addEvent(body: string) {
    return this.http.post(Config.baseUrl + Config.eventAddUrl, body, this.httpJsonOptions)
      .pipe(first());
  }
  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(Config.baseUrl + Config.eventUrl + id, this.httpOptions)
      .pipe(map( res => {
        let e = new Event();
        e = res;
        return e;
      }));
  }
}
