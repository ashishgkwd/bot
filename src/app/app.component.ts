import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Box Office';
  currentUser:User;

  constructor(private userService:UserService){
  }

  showCurrentUser(){
    this.currentUser = this.userService.getLoggedInUser();
    console.log(`CU: `, this.currentUser);
  }
}
