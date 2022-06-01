import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services";
import {IMoviesDetails} from "../../interfaces";
import {urlPoster} from "../../../../constants";

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  movieId: string;
  singleMovie: IMoviesDetails;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.movieId = id);

    this.movieService.getById(this.movieId).subscribe(value => this.singleMovie = value);
  }

  getPosterUrl(poster_path: string): string {
    return urlPoster + poster_path;
  }

  getTimeFromMins(mins: number): string {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'h ' + minutes + 'm';
  };

  getListOfGenres(): string {
    let movieGenres: string[] = [];


    this.singleMovie.genres.map(genre => {
      movieGenres.push(genre.name);
    })

    return movieGenres.join(', ');
  }

}
