import { Injectable } from '@angular/core';
import { Movie } from '../models';
import { ShowTypes, Language } from '../constants';

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

  constructor() { }

  getMovieList():Movie[] {
    return this.movieList;
  }
}
