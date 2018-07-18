import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { User } from "../models";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService:UserService) {
    this.setupLoginForm();
  }

  setupLoginForm() {
    //! descriptive way to create a Form using custom fields
    this.signupForm = this.formBuilder.group({
      username: ["", [Validators.required, this.validateAdminUsername()]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });

    //! another way to create a form matching any existing data model, but requires extra effort to support validators etc.
    // this.loginForm = this.formBuilder.group(new User());
  }

  get email(): AbstractControl {
    return this.signupForm.get("email");
  }

  get username(): AbstractControl {
    return this.signupForm.get("username");
  }

  resetLoginForm() {
    this.signupForm.reset(new User());
  }

  validateAdminUsername() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let result = null;
      if (control.value.toLowerCase().includes("admin")) {
        result = { admin: control.value };
      }
      return result;
    };
  }

  /* validateAdminUsernameOnServer() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let result = null;
      if (control.value.toLowerCase().includes("admin")) {
        result = { admin: control.value };
      }

      return new Promise((resolve, reject) => {
        resolve(result), reject(null);
      });
      
      //! delayed observable
      //return of(result).pipe(delay(2000));
    };
  } */

  onSubmit() {
    let loggedInUser = this.signupForm.value as User;
    this.userService.signupUser(loggedInUser).subscribe(
      user => (user.id) ? this.resetLoginForm() : console.log(`user registration failed`),
      err => console.error(`ERROR registering user: `, err)
    )
  }

  ngOnInit() {
  }

}
