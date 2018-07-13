import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { ShowTypes, Language } from '../constants';
import { NgForm } from '@angular/forms';
import { DefaultMovie, Movie } from '../models';
import { UserService } from '../services/user.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showTypes:string[];
  languages:string[];

  @Output() onNewRelease:EventEmitter<string> = new EventEmitter<string>();
  /* @ViewChild('newMovieInput') newReleaseInput:ElementRef; */

  constructor(private userService:UserService, private movieService:MovieService) { }

  ngOnInit() {
    this.showTypes = Object.keys(ShowTypes).map(key => ShowTypes[key]);
    this.languages = Object.keys(Language).map(key => Language[key]);
  }

  /* addNewRelease(newReleaseInput:HTMLInputElement) { */
  addNewRelease(newReleaseName:string) {
    console.log("New movie released: ", newReleaseName);
    this.onNewRelease.emit(newReleaseName);
    /* newReleaseInput.nativeElement.value = ""; */
  }

  onSubmit(newReleaseForm:NgForm) {
    let newMovie = {...DefaultMovie, ...newReleaseForm.value} as Movie;
    newMovie["addedBy"] = this.userService.getLoggedInUser().username;
    this.movieService.postNewRelease(newMovie).subscribe(
      movie => console.log('new movie posted: ', movie),
      err => console.log(`error posting new movie: `, err)
    )
  }
}
