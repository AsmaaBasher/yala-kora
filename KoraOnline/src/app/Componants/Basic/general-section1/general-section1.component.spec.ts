import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSection1Component } from './general-section1.component';

describe('GeneralSection1Component', () => {
  let component: GeneralSection1Component;
  let fixture: ComponentFixture<GeneralSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSection1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
