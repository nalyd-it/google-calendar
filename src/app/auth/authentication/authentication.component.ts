import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { AuthenticationService } from './authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm){
    console.log("Button clicked");
    console.log(data.value);
    //console.log(data);
    

    this.auth.signin(data.value.email, data.value.password).subscribe(
      data => {
        console.log("signed in");
        console.log(data);
        this.router.navigate(['Week']);
      },
      error => {
        this.auth.signup(data.value.email, data.value.password).subscribe(
          data => {
            console.log("signed up");
            console.log(data);
            this.router.navigate(['Week']);
          },
          error => {
            console.log("error");
            console.log(error);
          }
        )
      }
    )
    
    data.reset();
  }

}

