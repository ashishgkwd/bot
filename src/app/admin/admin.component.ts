import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { ShowTypes, Language } from '../constants';
import { NgForm } from '@angular/forms';
import { DefaultMovie, Movie } from '../models';
import { UserService } from '../services/user.service';

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

  constructor(private userService:UserService) { }

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
    console.log(`FORM: `, newReleaseForm);
    let x = {...DefaultMovie, ...newReleaseForm.value} as Movie;
    x["addedBy"] = this.userService.getLoggedInUser().username;
    console.log(`FORM: `, x);
  }
}
