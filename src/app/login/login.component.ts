import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { User } from "../models";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) {}

  ngOnInit() {}

  onSubmit(loginForm:NgForm){
    let user = {...loginForm.value} as User;
    this.userService.setLoggedInUser(user);
    loginForm.reset();
    console.log(`LOGGED-IN USER: `, user);
  }
}
