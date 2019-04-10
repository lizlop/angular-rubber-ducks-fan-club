import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {EventsComponent} from './events/events.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthModule} from './auth/auth.module';
import {AuthGuard} from './auth/auth.guard';
import {PrivateModule} from './private/private.module';
import {EventDetailComponent} from './private/event-detail/event-detail.component';

const routes: Routes = [
  {path: 'about',
  component: AboutComponent},
  {path: 'events',
  component: EventsComponent},
  {path: 'home',
    loadChildren: () => PrivateModule,
    canActivate: [AuthGuard]
  },
  {path: '',
  loadChildren: () => AuthModule},
  {path: '**',
  component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
