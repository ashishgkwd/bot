import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

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

  @Input() movieList:string[];

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
    console.log('ngOnChanges: ', change);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  // ! right method to check for changes which are not managed by Angular
  ngDoCheck() {
    console.log('ngDoCheck: ', this.movieList);
  }

  ngAfterContentInit() {
    console.log('afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('afterContentChecked');
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked');
  }

  ngOnDestroy() {
    console.log('onDestroy');
  }

}
