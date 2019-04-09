import {Gender} from './gender';
import {Place} from '../events/place';

export class User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  birthday: Date;
  address: Place;
}
