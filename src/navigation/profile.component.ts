import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit} from "@angular/core";
import { ProfileData } from "./profile.model";

@Injectable()
@Component({
    selector: "navbar-profile",
    templateUrl: "profile.component.html"
})
export class NavbarProfileComponent implements OnInit{
    myProfileData: ProfileData | undefined;
    
    constructor(private http: HttpClient) {
    }
    ngOnInit(): void{
        console.log("initializing component...");
        this.getProfileData();
        this.showProfileData();
    }

    getProfileData(){
        return this.http.get<ProfileData>("https://cal-f9b9b-default-rtdb.firebaseio.com/login-info.json");
    }
    showProfileData(){
        this.getProfileData().subscribe((data: ProfileData) => {
            console.log(data);
            this.myProfileData = data;
        })
    }
}