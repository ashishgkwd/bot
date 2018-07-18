import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { User } from "../models";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  onSubmit(loginForm:NgForm){
    let user = {...loginForm.value} as User;
    loginForm.reset();
    console.log(`LOGGED-IN USER: `, user);
  }
}
