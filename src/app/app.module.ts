import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/navigation/topnavbar.component';
import { DotwDotmComponent } from 'src/date/dotwDotm.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DayLayoutComponent } from 'src/date/day-layout.component';
import { WeekLayoutComponent } from 'src/date/week-layout.component';
import { MonthLayoutComponent } from 'src/date/month-layout.component';
import { YearLayoutComponent } from 'src/date/year-layout.component';
import { FourDayLayoutComponent } from 'src/date/4day-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    DotwDotmComponent,
    DayLayoutComponent,
    WeekLayoutComponent,
    MonthLayoutComponent,
    YearLayoutComponent,
    FourDayLayoutComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
