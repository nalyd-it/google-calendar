import { Component, Injectable, OnInit } from "@angular/core";
import { CurrentWeekModel } from "./currentWeek.model";
import { CurrentWeekService } from "./currentWeek.service";


@Injectable()
@Component({
    selector: 'fm-week-layout',
    templateUrl: 'week-layout.component.html',
    styleUrls: ['week-layout.component.css']
})



export class WeekLayoutComponent implements OnInit {
    myCurrentWeek: CurrentWeekModel[] = [];

    constructor(private weekService: CurrentWeekService) {
    }
    ngOnInit(): void {
        this.weekService.getCurrentWeek().subscribe((data: CurrentWeekModel[]) => {
            console.log("initializing current week...");
            for (var day of data) {
                console.log(day);
                this.myCurrentWeek.push(day)
            }
        });
    }


}
