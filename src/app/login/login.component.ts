import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { User } from "../models";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  username:string;

  constructor(private userService:UserService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      map => this.username = map.get('username'),
      err => console.error(`Error resolving username query param`)
    )
  }

  onSubmit(loginForm:NgForm){
    let user = {...loginForm.value} as User;
    this.userService.authenticateUser(user);
    loginForm.reset();
    console.log(`LOGGED-IN USER: `, user);
  }
}
