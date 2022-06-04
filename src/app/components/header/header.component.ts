import {Component, DoCheck, OnInit} from '@angular/core';

import {GenreService} from "../../modules/movie/services";
import {DataService} from "../../services";
import {ColorThemeService} from "../../services/color-theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  currentPage: number;
  genresList: string;

  constructor(private genreService: GenreService, private dataService: DataService, private colorThemeService: ColorThemeService) {
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

  ngDoCheck(): void {
    this.colorThemeService.changeColorTheme('header-container');
  }
}
