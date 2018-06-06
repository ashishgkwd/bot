import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Movie, DefaultMovie } from '../models';
import { ShowTypes, Language } from '../constants';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  serverList:Movie[] = [
    {title: 'Avenger: Infinity War', rating: 86, isRestricted:false, showType: ShowTypes.GOLD, language: Language.ENGLISH},
    {title: 'Deadpool 2', rating: 92, isRestricted:true, showType: ShowTypes.VIP, language: Language.ENGLISH},
    {title: 'Book Club', rating: 58, isRestricted:false, showType: ShowTypes.ADVANCE, language: Language.ENGLISH},
    {title: 'Cristiano Ronaldo', rating: 89, isRestricted:false, showType: ShowTypes.ADVANCE, language: Language.ENGLISH}
  ];

  i: number = 0;
  movieList: Movie[] = [];
  intervalId:any = null;
  dataLoadTime = {start: new Date().toLocaleTimeString()};
  searchTerm:string;
  
  constructor() { }

  ngOnInit() {
    /* this.intervalId = setInterval(this.mockMovieListFromServer, 2000); */
    this.movieList = [...this.serverList];
  }

  mockMovieListFromServer = () => {
    if (this.i < this.serverList.length) {
      console.log('Push at index: ', this.i);
      /**
       * The below line will update the movieList array
       * but the view will not update as the initial object reference remains the same.
       * Structural directive like *ngFor should be used in such cases.
       * Destructing or Array functions which return new refernce can be a workaround.
       */
      /* this.movieList.push(this.serverList[this.i]); */
      /* this.movieList = [...this.movieList, this.serverList[this.i]]; */
      
      // ! the below will work as we are calling array.toString() function in view
      this.movieList.push(this.serverList[this.i]);
      this.i++;
      console.log('New MovieList: ', this.movieList);
    } else {
      clearInterval(this.intervalId);
      this.dataLoadTime['end'] =  new Date().toLocaleTimeString();
    }
  };

  addNewMovie(title:string) {
    console.log('New movie from Admin: ', title);
    const newMovie:Movie =  {...DefaultMovie, ...{title}};

    // ! the below will work as we are calling array.toString() function in view
    this.movieList.push(newMovie);
  }

  searchInputListener(input:string){
    console.log('input: ', input);
    this.searchTerm = input;
  }

}
