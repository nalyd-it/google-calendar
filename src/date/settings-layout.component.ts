import { Component, Injectable, OnInit } from "@angular/core";
import{CurrentWeekModel} from "./currentWeek.model";
import { CurrentWeekService } from "./currentWeek.service";
import { NgForm } from "@angular/forms";


@Injectable()
@Component({
    selector: 'fm-settings-layout',
    templateUrl: 'settings-layout.component.html',
    styleUrls: ['settings-layout.component.css']
})

export class SettingsLayoutComponent{
    constructor(private weekService: CurrentWeekService) { 

    }
  
    ngOnInit(): void {
    }
  
    setWeek(event: any){
     // console.log(form.value);
      this.weekService.setWeek(event.target.dotwInput.value, event.target.dotmInput.value);//("dotwInput"), form.value("dotmInput"));
    }
}

// <form #postForm="ngForm" (ngSubmit)="addProduct(postForm.value)">

