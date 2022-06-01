import {Component, OnInit} from '@angular/core';

import {GenreService} from "../../modules/movie/services";
import {DataService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private genreService: GenreService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(({genres}) => {
      this.dataService.storageGenres.next(genres);
      // console.log(genres);
    });
  }

}
