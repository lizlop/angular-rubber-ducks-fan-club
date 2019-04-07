import {RouterModule, Routes} from '@angular/router';
import {JoinComponent} from './join/join.component';
import {LoginComponent} from './login/login.component';
import {StartPageComponent} from './start-page/start-page.component';
import {NgModule} from '@angular/core';

const authRoutes: Routes = [
  {
    path: '',
    component: StartPageComponent,
    children: [
      {
        path: 'join',
        component: JoinComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
