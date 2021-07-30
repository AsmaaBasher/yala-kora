import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersGoalListComponent } from './players-goal-list.component';

describe('PlayersGoalListComponent', () => {
  let component: PlayersGoalListComponent;
  let fixture: ComponentFixture<PlayersGoalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersGoalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
