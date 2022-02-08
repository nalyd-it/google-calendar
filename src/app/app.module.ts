import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/navigation/topnavbar.component';
import { DotwDotmComponent } from 'src/date/dotwDotm.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    DotwDotmComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
