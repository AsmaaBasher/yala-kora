import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSection3Component } from './general-section3.component';

describe('GeneralSection3Component', () => {
  let component: GeneralSection3Component;
  let fixture: ComponentFixture<GeneralSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSection3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
