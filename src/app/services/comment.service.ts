import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Comment } from '../models';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  getMovieComments(movieId:number): Observable<Comment[]> {
    return this.httpClient.get(`${environment.apiHost}movies/${movieId}/comments`) as Observable<Comment[]>;
  }

  postComment(comment:Comment): Observable<Comment> {
    return this.httpClient.post(`${environment.apiHost}comments`, comment) as Observable<Comment>
  }
}
