import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { MovieListComponent } from './common/movie-list/movie-list.component';
import { AdminComponent } from './admin/admin.component';
import { OnlyIfDirective } from './common/directives/only-if.directive';
import { FloatUpDirective } from './common/directives/float-up.directive';
import { FilterPipe } from './common/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    MovieListComponent,
    AdminComponent,
    OnlyIfDirective,
    FloatUpDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
