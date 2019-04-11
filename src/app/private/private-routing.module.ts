import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PrivateComponent} from './private/private.component';
import {DuckSharingComponent} from './duck-sharing/duck-sharing.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {DuckSharingFormComponent} from './duck-sharing-form/duck-sharing-form.component';
import {DuckListComponent} from './duck-list/duck-list.component';
import {DuckDetailComponent} from './duck-detail/duck-detail.component';
import {DuckFormComponent} from './duck-form/duck-form.component';
import {MyEventsComponent} from './my-events/my-events.component';
import {DuckAddComponent} from './duck-add/duck-add.component';
import {DuckUpdateComponent} from './duck-update/duck-update.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {UserUpdateComponent} from './user-update/user-update.component';
import {MyRequestsComponent} from './my-requests/my-requests.component';

const privateRoutes: Routes = [{
  path: '',
  children: [
    {
      path: 'duck-sharing',
      component: DuckSharingComponent
    },
    {
      path: 'duck-sharing-request',
      component: DuckSharingFormComponent
    },
    {
      path: 'my-ducks',
      component: DuckListComponent
    },
    {
      path: 'duck/:id',
      component: DuckDetailComponent
    },
    {
      path: 'duck-add',
      component: DuckAddComponent
    },
    {
      path: 'duck-update/:id',
      component: DuckUpdateComponent
    },
    {
      path: 'my-account',
      component: MyAccountComponent
    },
    {
      path: 'my-events',
      component: MyEventsComponent
    },
    {
      path: 'create-event',
      component: CreateEventComponent
    },
    {
      path: 'my-requests',
      component: MyRequestsComponent
    },
    {
      path: 'event/:id',
      component: EventDetailComponent},
    {
      path: 'settings/:id',
      component: UserUpdateComponent
    },
    {
      path: '',
      component: PrivateComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule]
})

export class PrivateRoutingModule { }
