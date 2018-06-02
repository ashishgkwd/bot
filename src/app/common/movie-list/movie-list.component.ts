import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],

  // todo: uncomment the below to demo onPush change detection
  /* changeDetection: ChangeDetectionStrategy.OnPush */
})
export class MovieListComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  private logLifeCycle:boolean = false; //flag to toggle life cycle methods logging
  @Input() movieList:Movie[];
  
  /* private _movieList:string[];

  @Input()
  set movieList(names:string[]){
    this._movieList = names.filter(name => !name.toLowerCase().includes('dead'));
  }

  get movieList():string[] {
    return this._movieList;
  } */

  constructor(private changeDetectorRef:ChangeDetectorRef) { }

  // todo: Uncomment below to demo onPush
  /* refreshView() {
    console.log('trigger change detection & view refresh');
    this.changeDetectorRef.detectChanges();
  } */

  ngOnChanges(change:SimpleChanges) {
    (this.logLifeCycle && console.log('ngOnChanges: ', change));
  }

  ngOnInit() {
    (this.logLifeCycle && console.log('ngOnInit'));
  }

  // ! right method to check for changes which are not managed by Angular
  ngDoCheck() {
    (this.logLifeCycle && console.log('ngDoCheck: ', this.movieList));
  }

  ngAfterContentInit() {
    (this.logLifeCycle && console.log('afterContentInit'));
  }

  ngAfterContentChecked() {
    (this.logLifeCycle && console.log('afterContentChecked'));
  }

  ngAfterViewInit() {
    (this.logLifeCycle && console.log('afterViewInit'));
  }

  ngAfterViewChecked() {
    (this.logLifeCycle && console.log('afterViewChecked'));
  }

  ngOnDestroy() {
    (this.logLifeCycle && console.log('onDestroy'));
  }

}
