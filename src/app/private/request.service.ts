import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {first, map} from 'rxjs/operators';
import {Duck, DuckSimple} from './duck';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../config';
import {FeatureSet} from './featureSet';
import {USERS} from './mock-user';

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
  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.username;
  }
  getUsers(): Observable<User[]> {
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id))
    );
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
  deleteDuck(id: number) {}
}
