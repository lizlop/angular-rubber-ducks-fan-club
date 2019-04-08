import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private/private.component';
import {NavigationModule} from '../navigation/navigation.module';
import { DuckSharingComponent } from './duck-sharing/duck-sharing.component';
import { MyAccountComponent } from './my-account/my-account.component';
import {PrivateRoutingModule} from './private-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PrivateComponent,
    DuckSharingComponent,
    MyAccountComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
