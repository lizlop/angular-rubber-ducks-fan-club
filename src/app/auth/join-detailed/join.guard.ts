import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {JoinComponent} from '../join/join.component';

@Injectable({
  providedIn: 'root'
})
export class JoinGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.router.url === '/join' || this.router.url === '/join-detailed') { return true; }
    this.router.navigate(['/']);
    return false;
  }
}
