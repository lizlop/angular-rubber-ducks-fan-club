import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StartPageComponent} from './start-page/start-page.component';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {JoinComponent} from './join/join.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    StartPageComponent,
    LoginComponent,
    JoinComponent
  ]
})
export class AuthModule {}
