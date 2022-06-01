import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {SingleMovieComponent} from "./components/single-movie/single-movie.component";
import {SingleMovieResolver} from "./services";

const routes: Routes = [
  {
    path: '', component: MoviesListComponent, children: [
      // {path: ':id', component: SingleMovieComponent}
    ]
  },
  {path: ':id', component: SingleMovieComponent, resolve: {singleMovieData: SingleMovieResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
