import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { MovieListComponent } from './common/movie-list/movie-list.component';
import { OnlyIfDirective } from './common/directives/only-if.directive';
import { FloatUpDirective } from './common/directives/float-up.directive';
import { FilterPipe } from './common/pipes/filter.pipe';
import { UpcomingBannerComponent } from './common/upcoming-banner/upcoming-banner.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommentsComponent } from './common/comments/comments.component';
import { AdminModule } from './admin/admin.module';
import { DATE } from './constants';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    MovieListComponent,
    OnlyIfDirective,
    FloatUpDirective,
    FilterPipe,
    UpcomingBannerComponent,
    LoginComponent,
    SignupComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [
    {provide: DATE, useValue: new Date()}
  ],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
