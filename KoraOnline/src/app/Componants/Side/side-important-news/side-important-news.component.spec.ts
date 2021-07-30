import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImportantNewsComponent } from './side-important-news.component';

describe('SideImportantNewsComponent', () => {
  let component: SideImportantNewsComponent;
  let fixture: ComponentFixture<SideImportantNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideImportantNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideImportantNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
