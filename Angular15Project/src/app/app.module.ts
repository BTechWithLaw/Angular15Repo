import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CalenderComponent } from './calender/calender.component';
import { TimerComponent } from './timer/timer.component';




@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    CalenderComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[DatepickerComponent]
})
export class AppModule { }
