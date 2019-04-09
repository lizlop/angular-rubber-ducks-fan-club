import DateTimeFormat = Intl.DateTimeFormat;
import {Place} from './place';

export class Event {
  id: number;
  name: string;
  isClubOnly: boolean;
  maxPeople: number;
  participants: number;
  description: string[];
  date: string;
  place: Place;
}
