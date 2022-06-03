import {Component, OnInit} from '@angular/core';

import {IMovieShortInfo} from "../../interfaces";
import {MovieService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../../services";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovieShortInfo[];
  totalPages: number;
  genresList: string;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    let pageMovies = 1;

    this.activatedRoute.queryParams.subscribe(({page, with_genres}) => {
        this.dataService.pageNumber.next(page);

      this.dataService.storageGenreIds.subscribe(data => this.genresList = data);

      this.movieService.getAll(page, this.genresList).subscribe(value => {
        this.movies = value.results;
        this.totalPages = value.total_pages;
      });
    })
  }
}
