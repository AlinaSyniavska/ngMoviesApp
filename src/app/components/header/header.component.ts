import {Component, OnInit} from '@angular/core';

import {GenreService} from "../../modules/movie/services";
import {DataService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', 'src/app/root-css/root-style.css']
})
export class HeaderComponent implements OnInit {

  currentPage: number;

  constructor(private genreService: GenreService, private dataService: DataService) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(({genres}) => {
      this.dataService.storageGenres.next(genres);
      // console.log(genres);

      this.dataService.pageNumber.subscribe(data => this.currentPage = data);
    });
  }

}
