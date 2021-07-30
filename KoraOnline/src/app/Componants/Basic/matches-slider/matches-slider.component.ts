import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-slider',
  templateUrl: './matches-slider.component.html',
  styleUrls: ['./matches-slider.component.scss']
})

export class MatchesSliderComponent implements OnInit {
  cards = [
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى الاوروبى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
    {
      dory: 'الدورى',
      team_one: 'دوندالك',
      team_two: 'ارسنال',
      goals_team_one: '0',
      goals_team_two: '2',
      states: 'لم تبدأ',
      time: '22:00'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 4);
  }
}

