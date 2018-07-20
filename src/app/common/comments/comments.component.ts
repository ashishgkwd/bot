import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { Observable } from '../../../../node_modules/rxjs';
import { Comment } from '../../models';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  defaultMovieId:number = 1;
  commentForm: FormGroup;
  comments$:Observable<Comment[]>;

  constructor(private formBuilder:FormBuilder, private commentService: CommentService) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      author: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      comment: ['', Validators.required]
    })
    this.fetchMovieComments();
  }

  fetchMovieComments(){
    this.comments$ = this.commentService.getMovieComments(this.defaultMovieId);
  }

  onSubmit() {
    let newComment = {...this.commentForm.value} as Comment;
    newComment["movieId"] = this.defaultMovieId;
    newComment["commentedOn"] = Date.now();
    console.log(`Comment: `, newComment);
    this.commentService.postComment(newComment).subscribe(
      comment => {
        this.commentForm.reset();
        this.fetchMovieComments();
      },
      err => console.error(`Error adding comment: `, err)
    )
    
  }

  get author(): AbstractControl {
    return this.commentForm.get("author");
  }

  get comment(): AbstractControl {
    return this.commentForm.get("comment");
  }

}
