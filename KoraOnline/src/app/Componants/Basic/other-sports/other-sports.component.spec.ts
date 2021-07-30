import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSportsComponent } from './other-sports.component';

describe('OtherSportsComponent', () => {
  let component: OtherSportsComponent;
  let fixture: ComponentFixture<OtherSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
