import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSection4Component } from './general-section4.component';

describe('GeneralSection4Component', () => {
  let component: GeneralSection4Component;
  let fixture: ComponentFixture<GeneralSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSection4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
