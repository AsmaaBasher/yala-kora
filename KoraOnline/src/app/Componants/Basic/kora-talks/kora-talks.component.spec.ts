import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoraTalksComponent } from './kora-talks.component';

describe('KoraTalksComponent', () => {
  let component: KoraTalksComponent;
  let fixture: ComponentFixture<KoraTalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoraTalksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoraTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
