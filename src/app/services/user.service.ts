import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser:User;

  constructor() { }

  setLoggedInUser(user:User){
    this.currentUser = user;
    console.log(`CURRENT USER: `, this.currentUser);
  }

  getLoggedInUser():User {
    return this.currentUser;
  }
}
