import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Box Office';
  currentUser:User;

  constructor(private userService:UserService){
  }

  ngOnInit() {
    this.userService.userUpdate$.subscribe(
      user => this.currentUser = user,
      err => console.log(`error setting current user: `, err),
      () => console.log(`observable complete`)
    )
  }
}
