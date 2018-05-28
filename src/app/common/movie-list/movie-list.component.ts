import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movieList:Array<string>;

  /* private _movieList:Array<string>;

  @Input()
  set movieList(names:Array<string>){
    this._movieList = names.filter(name => !name.toLowerCase().includes('dead'));
  }

  get movieList():Array<string> {
    return this._movieList;
  } */

  constructor() { }

  ngOnInit() {
  }

}
