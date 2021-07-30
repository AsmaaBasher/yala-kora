import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesSliderComponent } from './matches-slider.component';

describe('MatchesSliderComponent', () => {
  let component: MatchesSliderComponent;
  let fixture: ComponentFixture<MatchesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
