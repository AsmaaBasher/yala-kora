import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRelatedTopicsComponent } from './side-related-topics.component';

describe('SideRelatedTopicsComponent', () => {
  let component: SideRelatedTopicsComponent;
  let fixture: ComponentFixture<SideRelatedTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideRelatedTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideRelatedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
