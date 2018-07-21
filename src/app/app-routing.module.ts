import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TodayComponent } from './today/today.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommentsComponent } from './common/comments/comments.component';
import { AuthGuard } from './guards/auth.guard';

const routes:Routes = [
  {path: 'home', component: TodayComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/comment/:id', component: CommentsComponent, canActivate: [AuthGuard]},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
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
