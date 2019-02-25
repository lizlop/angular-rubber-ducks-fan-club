import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component';
import {EventsComponent} from './events/events.component';
import {JoinComponent} from './join/join.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthModule} from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventsComponent,
    JoinComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
