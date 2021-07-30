import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSection2Component } from './general-section2.component';

describe('GeneralSection2Component', () => {
  let component: GeneralSection2Component;
  let fixture: ComponentFixture<GeneralSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSection2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
