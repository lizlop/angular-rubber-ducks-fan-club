export class SimpleRequest {
  id: number;
  isApproved: string;
}

export class RequestedUser {
  nickname: string;
  email: string;
}

export class SendRequest {
  isApproved: string;
  user: RequestedUser;
}

export class FullRequestedUser {
  id: number;
  nickname: string;
  email: string;
}

export class RequestedDuck {
  id: number;
  name: string;
}

export class Request {
  id: number;
  isApproved: string;
  user: FullRequestedUser;
  duck: RequestedDuck;
}
