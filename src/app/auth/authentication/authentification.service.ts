import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    signUpEndpoint: string = "signUp";
    //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    signInEndpoint: string = "signInWithPassword";

    public constructor(private http:HttpClient){

    }

    public signup(email: string, password: string){  
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };

        return this.http.post(this.baseUrl + ":" + this.signUpEndpoint + "?" + 
            "key=" + environment.firebase.apiKey, requestBody);
    }

    public signin(email: string, password: string){  
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };

        return this.http.post(this.baseUrl + ":" + this.signInEndpoint + "?" + 
            "key=" + environment.firebase.apiKey, requestBody);
    }
}