import {RouterModule, Routes} from '@angular/router';
import {JoinComponent} from './join/join.component';
import {LoginComponent} from './login/login.component';
import {StartPageComponent} from './start-page/start-page.component';
import {NgModule} from '@angular/core';
import {JoinDetailedComponent} from './join-detailed/join-detailed.component';
import {JoinGuard} from './join-detailed/join.guard';

const authRoutes: Routes = [
  {
    path: '',
    component: StartPageComponent, children: [
      {
        path: 'join',
        component: JoinComponent
      },
      {
        path: 'join-detailed',
        component: JoinDetailedComponent,
        canActivate: [JoinGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
