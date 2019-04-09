import { Event } from './event';

export const EVENTS: Event[] = [
  { id: 1, name: 'THE FIRST RDFC FESTIVAL IN VORONEZH', isClubOnly: true, maxPeople: 10, participants: 10, description: ['The RDFC festival is going on and we glad to accept the new participant. Meet, for the firts time, the Rubber Duck’s Fan Club festival in Voronezh!'], date: '12-08-2019', place: {id: 1, name: 'Museum', country: 'Russian Federation', city: 'Moscow', street: 'Lomonosov', building: 36}},
  { id: 2, name: 'MASTER CLASS ON RUBBER DUCK DECORATION', isClubOnly: false, maxPeople: 0, participants: 0, description: ['The famous decorator and one of the creators of Duckfest, Florentijn Hofman, will come to Moscow to give the master class on rubber duck decoration. Hurry up to register - the number of participants is limited! more details here'], date: '12-08-2019', place: {id: 2, name: '', country: 'Great Britain', city: 'London', street: 'Bloomsbury, Tottenham Court Rd', building: 77}}
];

