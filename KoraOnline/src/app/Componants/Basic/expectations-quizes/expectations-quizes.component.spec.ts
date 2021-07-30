import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectationsQuizesComponent } from './expectations-quizes.component';

describe('ExpectationsQuizesComponent', () => {
  let component: ExpectationsQuizesComponent;
  let fixture: ComponentFixture<ExpectationsQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectationsQuizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectationsQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
