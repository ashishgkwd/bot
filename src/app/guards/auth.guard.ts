import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private userService:UserService,
    private router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkUserLogin();
  }

  checkUserLogin():boolean {
    let user:User = this.userService.getLoggedInUser();
    if(user && user.role === 'ADMIN') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(){
    console.log('Guard validation for be some child specific log');
    return true;
  }
}
