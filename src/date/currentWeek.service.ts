import{HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import{CurrentWeekModel} from "./currentWeek.model";

@Injectable(
    {providedIn: 'root'}
)

export class CurrentWeekService{
    private baseUrl:string = "https://cal-f9b9b-default-rtdb.firebaseio.com/";
    private currentWeekEndPoint:string = "current-week.json";

    constructor(private http:HttpClient){
        //return this.http.get(this.baseUrl + this.currentWeekEndPoint);
    }

    getCurrentWeek(){
        return this.http.get<CurrentWeekModel []>(this.baseUrl + this.currentWeekEndPoint);
    }

    getCurrentWeekDay(index:number){
        return this.http.get<CurrentWeekModel>(this.baseUrl + 'current-week/' + index + '.json');
    }
}