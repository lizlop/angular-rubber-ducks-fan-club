import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StartPageComponent} from './start-page/start-page.component';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {JoinComponent} from './join/join.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JoinDetailedComponent } from './join-detailed/join-detailed.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StartPageComponent,
    LoginComponent,
    JoinComponent,
    JoinDetailedComponent
  ]
})
export class AuthModule {}
