import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentForm: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      author: ['', Validators.required],
      comment: ['', Validators.required]
    })
  }

  onSubmit() {
    let newComment = {...this.commentForm.value} as Comment;
    console.log(`Comment: `, newComment);
    this.commentForm.reset();
  }

}
