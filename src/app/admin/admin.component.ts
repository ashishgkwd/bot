import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Output() onNewRelease:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addNewRelease(event) {
    event.preventDefault();
    const newMovie: string = event.target.movie.value;
    console.log("New movie released: ", newMovie);
    this.onNewRelease.emit(newMovie);
    event.target.movie.value = "";
  }
}
