import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMoviesList} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAll(page: number = 1): Observable<IMoviesList> {
    return this.httpClient.get<IMoviesList>(urls.movies, {params: {page}});
  }


}
