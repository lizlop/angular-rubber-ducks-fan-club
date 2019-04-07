import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PrivateComponent} from './private/private.component';
import {DuckSharingComponent} from './duck-sharing/duck-sharing.component';
import {MyAccountComponent} from './my-account/my-account.component';

const privateRoutes: Routes = [{
  path: '',
  component: PrivateComponent,
  children: [
    {
      path: 'duck-sharing',
      component: DuckSharingComponent
    },
    {
      path: 'my-account',
      component: MyAccountComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule]
})

export class PrivateRoutingModule { }
