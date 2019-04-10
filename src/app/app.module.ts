import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component';
import {EventsComponent} from './events/events.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PrivateModule} from './private/private.module';
import {NavigationModule} from './navigation/navigation.module';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './private/event-detail/event-detail.component';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './private/authInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventsComponent,
    PageNotFoundComponent,
    EventListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PrivateModule,
    NavigationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
