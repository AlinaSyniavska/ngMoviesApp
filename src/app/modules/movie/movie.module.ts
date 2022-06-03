import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import {MainInterceptor} from "../../main.interceptor";
import {GenreService, MovieService, SingleMovieResolver} from "./services";
import { PaginationComponent } from './components/pagination/pagination.component';
import {NgbdRatingDecimalModule} from "./components/start-rating/rating-decimal.module";
import {HttpModule} from "../../http.module";
import { GenresListComponent } from './components/genres-list/genres-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        MoviesListComponent,
        MoviesListCardComponent,
        SingleMovieComponent,
        PaginationComponent,
        GenresListComponent,
    ],
  imports: [
    CommonModule,
    HttpModule,// HttpClientModule,
    MovieRoutingModule,
    NgbdRatingDecimalModule,
    ReactiveFormsModule
  ],
    providers: [
        MovieService,
        GenreService,
        SingleMovieResolver,
    ],
    exports: [
        GenresListComponent
    ]
})
export class MovieModule { }
