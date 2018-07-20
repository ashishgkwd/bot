import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { Observable } from '../../../../node_modules/rxjs';
import { Comment } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  currentMovieId:number = 1;
  commentForm: FormGroup;
  comments$:Observable<Comment[]>;

  constructor(
    private formBuilder:FormBuilder,
    private commentService: CommentService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.buildCommentsForm();
    this.fetchMovieComments();
  }

  buildCommentsForm() {
    this.commentForm = this.formBuilder.group({
      author: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      comment: ['', Validators.required]
    })
  }

  fetchMovieComments(){
    this.comments$ = this.route.paramMap.pipe(
      switchMap(
        paramMap => {
          this.currentMovieId = +paramMap.get('id');
          return this.commentService.getMovieComments(this.currentMovieId);
        }
      )
    )
  }

  onSubmit() {
    let newComment = {...this.commentForm.value} as Comment;
    newComment.movieId = this.currentMovieId;
    newComment.commentedOn = Date.now();

    this.commentService.postComment(newComment).subscribe(
      comment => {
        this.commentForm.reset();
        this.fetchMovieComments();
      },
      err => console.error(`Error adding comment: `, err)
    )
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

  get author(): AbstractControl {
    return this.commentForm.get("author");
  }

  get comment(): AbstractControl {
    return this.commentForm.get("comment");
  }

}
