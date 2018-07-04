import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { User } from "../models";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";

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
      username: ["", [Validators.required, this.validateAdminUsername()]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });

    //! another way to create a form matching any existing data model, but requires extra effort to support validators etc.
    // this.loginForm = this.formBuilder.group(new User());
  }

  get email(): AbstractControl {
    return this.loginForm.get("email");
  }

  get username(): AbstractControl {
    return this.loginForm.get("username");
  }

  resetLoginForm() {
    this.loginForm.reset(new User());
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
    let loggedInUser = this.loginForm.value as User;
    console.log(`USER: `, loggedInUser);
    this.resetLoginForm();
  }

  ngOnInit() {}
}
