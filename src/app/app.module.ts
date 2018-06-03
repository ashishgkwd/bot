import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { MovieListComponent } from './common/movie-list/movie-list.component';
import { AdminComponent } from './admin/admin.component';
import { OnlyIfDirective } from './common/directives/only-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    MovieListComponent,
    AdminComponent,
    OnlyIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
