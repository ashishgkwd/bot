import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TodayComponent } from './today/today.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommentsComponent } from './common/comments/comments.component';

const routes:Routes = [
  {path: 'home', component: TodayComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'comment', component: CommentsComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
