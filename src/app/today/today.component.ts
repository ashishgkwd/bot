import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Movie, DefaultMovie } from '../models';
import { ShowTypes, Language } from '../constants';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  movieList: Movie[] = [];
  searchTerm:string;
  
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieList = [...this.movieService.getMovieList()];
  }

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
