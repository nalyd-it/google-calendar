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
}