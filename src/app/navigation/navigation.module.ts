import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {RouterModule} from '@angular/router';
import {PrivateRoutingModule} from '../private/private-routing.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
