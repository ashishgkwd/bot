import { Injectable } from '@angular/core';
import { User } from '../models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser:User;

  userUpdate$:Subject<User> = new Subject<User>();

  constructor() { }

  setLoggedInUser(user:User){
    this.currentUser = user;
    this.userUpdate$.next(this.currentUser);
    console.log(`CURRENT USER: `, this.currentUser);
  }

  getLoggedInUser():User {
    return this.currentUser;
  }
}
