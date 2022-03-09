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
import { NavbarProfileComponent } from 'src/navigation/profile.component'
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    DotwDotmComponent,
    DayLayoutComponent,
    WeekLayoutComponent,
    MonthLayoutComponent,
    YearLayoutComponent,
    FourDayLayoutComponent,
    NavbarProfileComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
