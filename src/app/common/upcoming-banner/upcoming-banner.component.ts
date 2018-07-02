import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-upcoming-banner',
  templateUrl: './upcoming-banner.component.html',
  styleUrls: ['./upcoming-banner.component.css'],
  animations: [
    trigger('slideState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('inactive => active', animate('800ms ease-in')),
      transition('active => inactive', animate('800ms ease-out'))
    ])
  ]
})
export class UpcomingBannerComponent implements OnInit {

  slides:any[] = [
    {state: 'inactive', label: 'SLIDE 1'},
    {state: 'inactive', label: 'SLIDE 2'},
    {state: 'inactive', label: 'SLIDE 3'},
    {state: 'inactive', label: 'SLIDE 4'}
  ];
  currentActiveSlide;
  idx:number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(this.bannerRotator, 3000);
  }

  bannerRotator = () => {
    if(this.currentActiveSlide) {
      this.currentActiveSlide.state = 'inactive';
    }
    if(this.idx == this.slides.length){
      this.idx = 0;
    }
    if(this.idx < this.slides.length){
      this.currentActiveSlide = this.slides[this.idx];
      this.currentActiveSlide.state = 'active';
      this.idx++;
    }

  }

}
