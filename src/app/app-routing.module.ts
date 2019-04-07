import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {EventsComponent} from './events/events.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthModule} from './auth/auth.module';
import {PrivateModule} from './private/private.module';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: 'about',
  component: AboutComponent},
  {path: 'events',
  component: EventsComponent},
  {path: '',
  loadChildren: () => AuthModule},
  {path: 'home',
  loadChildren: () => PrivateModule,
  canActivate: [AuthGuard]},
  {path: '**',
  component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
