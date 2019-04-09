import {User} from './user';
import {Gender} from './gender';

export const USERS: User[] = [{
  id: 1,
  username: 'lizlop',
  email: 'lizlop@yandex.ru',
  firstName: 'Elizaveta',
  lastName: 'Lopyreva',
  gender: Gender.female,
  birthday: null,
  address: {
    id: 3,
    name: '',
    country: 'Russian Federation',
    city: 'Saint-Petersburg',
    street: '',
    building: null
  }
}];
