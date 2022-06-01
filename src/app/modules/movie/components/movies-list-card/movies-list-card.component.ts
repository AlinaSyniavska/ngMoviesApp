import {Component, Input, OnInit} from '@angular/core';

import {IGenre, IMovieShortInfo} from "../../interfaces";
import {DataService} from "../../../../services";
import {urlPoster} from "../../../../constants";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
  movie: IMovieShortInfo;
  posterUrl: string;
  listGenresMovie: string;
  genresList: IGenre[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getPosterUrl();
    this.listGenresMovie = this.getListOfGenres();
  }

  getPosterUrl(): void {
    this.posterUrl = urlPoster + this.movie.poster_path;
  }

  getListOfGenres(): string {
    let movieGenres: string[] = [];

    this.dataService.storageGenres.subscribe(data => this.genresList = data);
    // console.log(this.genresList);

    this.movie.genre_ids.map(id => {
      const index = this.genresList.findIndex(item => item.id === id);
      movieGenres.push(this.genresList[index]["name"]);
    })

    return movieGenres.join(', ');
  }

}
