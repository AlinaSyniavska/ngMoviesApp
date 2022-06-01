import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import {MainInterceptor} from "../../main.interceptor";
import {GenreService, MovieService} from "./services";
import { PaginationComponent } from './components/pagination/pagination.component';
import {NgbdRatingDecimalModule} from "./components/start-rating/rating-decimal.module";


@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesListCardComponent,
    SingleMovieComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    NgbdRatingDecimalModule
  ],
  providers: [
    MovieService,
    GenreService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    },
  ],
})
export class MovieModule { }
