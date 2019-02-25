import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from './about.component';
import {EventsComponent} from './events.component';
import {JoinComponent} from './join.component';
import {LoginComponent} from './login.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventsComponent,
    JoinComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
