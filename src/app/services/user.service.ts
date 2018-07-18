import { Injectable } from '@angular/core';
import { User } from '../models';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser:User;

  userUpdate$:Subject<User> = new Subject<User>();

  constructor(private httpClient:HttpClient) { }

  signupUser(user:User):Observable<User> {
    return this.httpClient.post<User>(environment.apiHost + 'users', user);
  }

  authenticateUser(user:User) {
    this.httpClient.get<User[]>(environment.apiHost + 'users',{params: {username:user.username, password: user.password}})
    .subscribe(
      userArray => {
        if(userArray.length == 1){
          this.setLoggedInUser(userArray[0]);
        }
      },
      err => console.error(`Error authenticating user: `, err)
    )
  }


  setLoggedInUser(user:User){
    this.currentUser = user;
    this.userUpdate$.next(this.currentUser);
    console.log(`CURRENT USER: `, this.currentUser);
  }

  getLoggedInUser():User {
    return this.currentUser;
  }
}
