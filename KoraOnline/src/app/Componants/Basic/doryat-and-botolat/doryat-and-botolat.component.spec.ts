import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoryatAndBotolatComponent } from './doryat-and-botolat.component';

describe('DoryatAndBotolatComponent', () => {
  let component: DoryatAndBotolatComponent;
  let fixture: ComponentFixture<DoryatAndBotolatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoryatAndBotolatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoryatAndBotolatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
