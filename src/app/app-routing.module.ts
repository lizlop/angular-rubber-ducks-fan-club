import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {EventsComponent} from './events/events.component';
import {JoinComponent} from './join/join.component';
import {LoginComponent} from './auth/login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'about',
  component: AboutComponent},
  {path: 'events',
  component: EventsComponent},
  {path: 'join',
  component: JoinComponent},
  {path: 'login',
  component: LoginComponent},
  {path: '',
  component: AppComponent},
  {path: '**',
  component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
