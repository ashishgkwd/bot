import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../models";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.setupLoginForm();
  }

  setupLoginForm() {
    //! descriptive way to create a Form using custom fields
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    //! another way to create a form matching any existing data model, but requires extra effort to support validators etc.
    // this.loginForm = this.formBuilder.group(new User());
  }

  resetLoginForm(){
    this.loginForm.reset(new User());
  }

  onSubmit(){
    let loggedInUser = this.loginForm.value as User;
    console.log(`USER: `, loggedInUser);
    this.resetLoginForm();
  }



  ngOnInit() {}
}
