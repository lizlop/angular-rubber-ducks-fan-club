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
      path: 'ducks',
      component: DuckListComponent
    },
    {
      path: 'duck/:id',
      component: DuckDetailComponent
    },
    {
      path: 'add-duck',
      component: DuckFormComponent
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
