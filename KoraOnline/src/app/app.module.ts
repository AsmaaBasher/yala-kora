
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componants/Basic/header/header.component';
import { HomeComponent } from './Componants/Basic/home/home.component';
import { FooterComponent } from './Componants/Basic/footer/footer.component';
import { GeneralComponent } from './Componants/Basic/general/general.component';
import { MatchesSliderComponent } from './Componants/Basic/matches-slider/matches-slider.component';
import { MatchesComponent } from './Componants/Basic/matches/matches.component';
import { NewsComponent } from './Componants/Basic/news/news.component';
import { DoryatAndBotolatComponent } from './Componants/Basic/doryat-and-botolat/doryat-and-botolat.component';
import { MediaComponent } from './Componants/Basic/media/media.component';
import { FantaziaStarsComponent } from './Componants/Basic/fantazia-stars/fantazia-stars.component';
import { OtherSportsComponent } from './Componants/Basic/other-sports/other-sports.component';
import { PageNotFoundComponent } from './Componants/Basic/page-not-found/page-not-found.component';
import { KoraTalksComponent } from './Componants/Basic/kora-talks/kora-talks.component';
import { ExpectationsQuizesComponent } from './Componants/Basic/expectations-quizes/expectations-quizes.component';
import { SideImportantNewsComponent } from './Componants/Side/side-important-news/side-important-news.component';
import { SideMostReadTopicsComponent } from './Componants/Side/side-most-read-topics/side-most-read-topics.component';
import { SideRelatedTopicsComponent } from './Componants/Side/side-related-topics/side-related-topics.component';
import { NewsDetailComponent } from './Componants/Basic/news-detail/news-detail.component';
import { GeneralSection1Component } from './Componants/Basic/general-section1/general-section1.component';
import { GeneralSection2Component } from './Componants/Basic/general-section2/general-section2.component';
import { GeneralSection3Component } from './Componants/Basic/general-section3/general-section3.component';
import { DoryComponent } from './Componants/Basic/dory/dory.component';
import { GeneralSection4Component } from './Componants/Basic/general-section4/general-section4.component';
import { PlayersGoalListComponent } from './Componants/Basic/players-goal-list/players-goal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GeneralComponent,
    MatchesSliderComponent,
    MatchesComponent,
    NewsComponent,
    DoryatAndBotolatComponent,
    MediaComponent,
    FantaziaStarsComponent,
    OtherSportsComponent,
    PageNotFoundComponent,
    KoraTalksComponent,
    ExpectationsQuizesComponent,
    SideImportantNewsComponent,
    SideMostReadTopicsComponent,
    SideRelatedTopicsComponent,
    NewsDetailComponent,
    GeneralSection1Component,
    GeneralSection2Component,
    GeneralSection3Component,
    DoryComponent,
    GeneralSection4Component,
    PlayersGoalListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
