import {Place} from './place';

export class SimpleEvent {
  id: number;
  name: string;
  date: string;
  cost: number;
  isClubOnly: boolean;
  maxPeople: number;
}

export class Event {
  id: number;
  name: string;
  date: string;
  cost: number;
  isClubOnly: string;
  maxPeople: number;
  place: Place;
}
