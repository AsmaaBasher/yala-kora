import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMostReadTopicsComponent } from './side-most-read-topics.component';

describe('SideMostReadTopicsComponent', () => {
  let component: SideMostReadTopicsComponent;
  let fixture: ComponentFixture<SideMostReadTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMostReadTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMostReadTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
