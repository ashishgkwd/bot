import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Output() onNewRelease:EventEmitter<string> = new EventEmitter<string>();
  /* @ViewChild('newMovieInput') newReleaseInput:ElementRef; */

  constructor() { }

  ngOnInit() {
  }

  /* addNewRelease(newReleaseInput:HTMLInputElement) { */
  addNewRelease(newReleaseName:string) {
    console.log("New movie released: ", newReleaseName);
    this.onNewRelease.emit(newReleaseName);
    /* newReleaseInput.nativeElement.value = ""; */
  }
}
