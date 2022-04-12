import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DayLayoutComponent } from 'src/date/day-layout.component';
import { WeekLayoutComponent } from 'src/date/week-layout.component';
import { MonthLayoutComponent } from 'src/date/month-layout.component';
import { YearLayoutComponent } from 'src/date/year-layout.component';
import { FourDayLayoutComponent } from 'src/date/4day-layout.component';
import { SettingsLayoutComponent } from  'src/date/settings-layout.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {path: '', component: WeekLayoutComponent},
  {path: 'Day', component: DayLayoutComponent},
  {path: 'Week', component: WeekLayoutComponent},
  {path: 'Month', component: MonthLayoutComponent},
  {path: 'Year', component: YearLayoutComponent},
  {path: '4Day', component: FourDayLayoutComponent},
  {path: 'Settings', component: SettingsLayoutComponent},
  {path: 'Auth', component: AuthenticationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
