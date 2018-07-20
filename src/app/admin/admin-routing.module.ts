import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    children:[
      {path: 'new', component: AdminComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: 'new', pathMatch: 'full'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
