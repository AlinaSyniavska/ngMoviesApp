import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {SingleMovieComponent} from "./components/single-movie/single-movie.component";

const routes: Routes = [
  {
    path: '', component: MoviesListComponent, children: [
      // {path: ':id', component: SingleMovieComponent}
    ]
  },
  {path: ':id', component: SingleMovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
