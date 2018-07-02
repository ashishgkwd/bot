import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBannerComponent } from './upcoming-banner.component';

describe('UpcomingBannerComponent', () => {
  let component: UpcomingBannerComponent;
  let fixture: ComponentFixture<UpcomingBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
