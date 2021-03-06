import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private/private.component';
import {NavigationModule} from '../navigation/navigation.module';
import { DuckSharingComponent } from './duck-sharing/duck-sharing.component';
import { MyAccountComponent } from './my-account/my-account.component';
import {PrivateRoutingModule} from './private-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DuckSharingFormComponent } from './duck-sharing-form/duck-sharing-form.component';
import { DuckListComponent } from './duck-list/duck-list.component';
import { DuckDetailComponent } from './duck-detail/duck-detail.component';
import { DuckFormComponent } from './duck-form/duck-form.component';
import { MyEventsComponent } from './my-events/my-events.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './authInterceptor';
import { DuckAddComponent } from './duck-add/duck-add.component';
import { DuckUpdateComponent } from './duck-update/duck-update.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';

@NgModule({
  declarations: [
    PrivateComponent,
    DuckSharingComponent,
    MyAccountComponent,
    CreateEventComponent,
    DuckSharingFormComponent,
    DuckListComponent,
    DuckDetailComponent,
    DuckFormComponent,
    MyEventsComponent,
    DuckAddComponent,
    DuckUpdateComponent,
    EventDetailComponent,
    UserUpdateComponent,
    MyRequestsComponent,
    RequestDetailComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class PrivateModule { }
