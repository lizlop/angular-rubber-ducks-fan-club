import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private/private.component';
import {NavigationModule} from '../navigation/navigation.module';
import { DuckSharingComponent } from './duck-sharing/duck-sharing.component';
import { MyAccountComponent } from './my-account/my-account.component';
import {PrivateRoutingModule} from './private-routing.module';

@NgModule({
  declarations: [
    PrivateComponent,
    DuckSharingComponent,
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
