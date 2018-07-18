import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../models";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.setupLoginForm();
  }

  setupLoginForm() {
    //! descriptive way to create a Form using custom fields
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    //! another way to create a form matching any existing data model, but requires extra effort to support validators etc.
    // this.signupForm = this.formBuilder.group(new User());
  }

  resetLoginForm(){
    this.signupForm.reset(new User());
  }

  onSubmit(){
    let loggedInUser = this.signupForm.value as User;
    console.log(`USER: `, loggedInUser);
    this.resetLoginForm();
  }

  ngOnInit() {
  }

}
