import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  serverList = [
    'Avengers: Infinity Wars',
    'Deadpool 2',
    'Book Club'
  ];
  i: number = 0;
  movieList: string[] = [];
  intervalId:any = null;
  dataLoadTime = {start: new Date().toLocaleTimeString()};
  
  constructor() { }

  ngOnInit() {
    this.intervalId = setInterval(this.mockMovieListFromServer, 2000);
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

  addNewMovie(newMovie:string) {
    console.log('New movie from Admin: ', newMovie);
    /* this.movieList = [...this.movieList, newMovie]; */
    
    // ! the below will work as we are calling array.toString() function in view
    this.movieList.push(newMovie);
  }

}
