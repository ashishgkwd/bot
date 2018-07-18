import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AuthInterceptor } from './interceptors/auth-interceptor';

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
    HttpClientModule,  
    AdminModule
  ],
  providers: [
    {provide: DATE, useValue: new Date()},
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
