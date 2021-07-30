import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './Componants/Basic/general/general.component';

import { MatchesComponent } from './Componants/Basic/matches/matches.component';
import { NewsComponent } from './Componants/Basic/news/news.component';
import { DoryatAndBotolatComponent } from './Componants/Basic/doryat-and-botolat/doryat-and-botolat.component';
import { MediaComponent } from './Componants/Basic/media/media.component';
import { FantaziaStarsComponent } from './Componants/Basic/fantazia-stars/fantazia-stars.component';
import { OtherSportsComponent } from './Componants/Basic/other-sports/other-sports.component';
import { KoraTalksComponent } from './Componants/Basic/kora-talks/kora-talks.component';
import { ExpectationsQuizesComponent } from './Componants/Basic/expectations-quizes/expectations-quizes.component';
import { PageNotFoundComponent } from './Componants/Basic/page-not-found/page-not-found.component';
import { NewsDetailComponent } from './Componants/Basic/news-detail/news-detail.component';
import { DoryComponent } from './Componants/Basic/dory/dory.component';
import { PlayersGoalListComponent } from './Componants/Basic/players-goal-list/players-goal-list.component';



const routes: Routes = [
  { path: 'General', component: GeneralComponent },
  { path: 'Matches', component: MatchesComponent },
  { path: 'News', component: NewsComponent },
  { path: 'NewsDetail/:id', component:NewsDetailComponent },
  { path: 'DoryatAndBotolat', component: DoryatAndBotolatComponent },
  { path: 'Media', component: MediaComponent },
  { path: 'FantaziaStars', component: FantaziaStarsComponent },
  { path: 'OtherSports', component: OtherSportsComponent },
  { path: 'KoraTalks', component: KoraTalksComponent },
  { path: 'ExpectationsQuizes', component: ExpectationsQuizesComponent },
  { path: 'Dory', component: DoryComponent },
  { path: 'PlayersGoalList', component: PlayersGoalListComponent },
  { path: '', redirectTo: '/General', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
