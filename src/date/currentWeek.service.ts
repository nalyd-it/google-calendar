import {Injectable} from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import{CurrentWeekModel} from "./currentWeek.model";

@Injectable(
    {providedIn: 'root'}
)

export class CurrentWeekService{
    constructor(private db:AngularFireDatabase){ }

    getCurrentWeek(){
        return this.db.list<CurrentWeekModel>("current-week").valueChanges();
    }

    //getCurrentWeekDay(index:number){
      //  return this.db.list<CurrentWeekModel>("current-week").valueChanges().get(number);
    //}

    setWeek(dotw: string, dotm: number){
        console.log("setWeek ran in service");
        var sunday = 0;
        var currentI = 0
        if(dotw === "Sunday"){
            sunday = dotm;
        }
        else if(dotw === "Monday"){
            sunday = dotm-1;
            currentI = 1;
        }
        else if(dotw === "Tuesday"){
            sunday = dotm-2;
            currentI = 2
        }
        else if(dotw === "Wednesday"){
            sunday = dotm-3;
            currentI = 3;
        }
        else if(dotw === "Thursday"){
            sunday = dotm-4;
            currentI = 4
        }
        else if(dotw === "Friday"){
            sunday = dotm-5;
            currentI = 5;
        }
        else if(dotw === "Saturday"){
            sunday = dotm-6;
            currentI = 6;
        }
        var dotwNames;
        dotwNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        
        for(let i = 0; i < 7; i++){
            var curr: string;
            if(currentI == i){
                curr = "1";
            }
            else{
                curr = "0";
            }
            const day: CurrentWeekModel = {
                dotm: sunday+i,
                dotw: dotwNames[i],
                is_today: curr
            };
            this.db.list<CurrentWeekModel>("current-week").update(i.toString(), day);
            
            
        }

    }
}