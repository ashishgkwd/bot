import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { MovieListComponent } from './common/movie-list/movie-list.component';
import { AdminComponent } from './admin/admin.component';
import { OnlyIfDirective } from './common/directives/only-if.directive';
import { FloatUpDirective } from './common/directives/float-up.directive';
import { FilterPipe } from './common/pipes/filter.pipe';
import { UpcomingBannerComponent } from './common/upcoming-banner/upcoming-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    MovieListComponent,
    AdminComponent,
    OnlyIfDirective,
    FloatUpDirective,
    FilterPipe,
    UpcomingBannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
