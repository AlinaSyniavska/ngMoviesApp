import {Component, OnInit} from '@angular/core';

import {GenreService} from "../../modules/movie/services";
import {DataService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentPage: number;
  genresList: string;

  constructor(private genreService: GenreService, private dataService: DataService) {
    this.currentPage = 1;
    this.genresList = '';
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(({genres}) => {
      this.dataService.storageGenres.next(genres);
      // console.log(genres);

      this.dataService.pageNumber.subscribe(data => this.currentPage = data);
      this.dataService.storageGenreIds.subscribe(data => this.genresList = data);
    });
  }

}
