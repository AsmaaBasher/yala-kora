import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantaziaStarsComponent } from './fantazia-stars.component';

describe('FantaziaStarsComponent', () => {
  let component: FantaziaStarsComponent;
  let fixture: ComponentFixture<FantaziaStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantaziaStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantaziaStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
