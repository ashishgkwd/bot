import { Injectable } from '@angular/core';
import { Movie } from '../models';
import { ShowTypes, Language } from '../constants';
import { from, Observable, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieList:Movie[] = [
    {title: 'Avenger: Infinity War', rating: 86, isRestricted:false, showType: ShowTypes.GOLD, language: Language.ENGLISH},
    {title: 'Deadpool 2', rating: 92, isRestricted:true, showType: ShowTypes.VIP, language: Language.ENGLISH},
    {title: 'Book Club', rating: 58, isRestricted:false, showType: ShowTypes.ADVANCE, language: Language.ENGLISH},
    {title: 'Cristiano Ronaldo', rating: 89, isRestricted:false, showType: ShowTypes.ADVANCE, language: Language.ENGLISH}
  ];

  movieListResponse$:Observable<Movie> =  from(this.movieList)
  .pipe(
    concatMap(
      movie => of(movie).pipe(delay(2000))
    )
  );

  constructor(private httpClient:HttpClient) { }

  getMovieList():Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(environment.apiHost + 'movies');
  }

  postNewRelease(movie:Movie):Observable<Movie> {
    return this.httpClient.post<Movie>(environment.apiHost + 'movies', movie);
  }
}
