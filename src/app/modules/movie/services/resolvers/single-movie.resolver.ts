import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IMoviesDetails} from "../../interfaces";
import {MovieService} from "../movie.service";

@Injectable({
  providedIn: 'root'
})
export class SingleMovieResolver implements Resolve<IMoviesDetails> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMoviesDetails> | Promise<IMoviesDetails> | IMoviesDetails {
    let {id} = route.params;
    return this.movieService.getById(id);
  }
}


