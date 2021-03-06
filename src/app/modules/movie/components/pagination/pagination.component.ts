import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../../services";
import {ColorThemeService} from "../../../../services/color-theme.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  totalPages: number;
  page: number;
  genresList: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private dataService: DataService, private colorThemeService: ColorThemeService) {
    this.page = 1;
    this.genresList = '';
  }

  ngOnInit(): void {
    const arrTop = document.getElementById('arrowTop') as HTMLElement;

    window.addEventListener('scroll', () => {
      arrTop.hidden = (scrollY < document.documentElement.clientHeight / 2);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('pages:' + this.totalPages);
  }

  ngDoCheck(): void {
    this.colorThemeService.changeColorTheme('btnPaginationPrev');
    this.colorThemeService.changeColorTheme('btnPaginationNext');
    this.colorThemeService.changeColorTheme('arrow');
  }

  changePage(e: Event) {
    const nextPage = document.getElementById('next');
    const prevPage = document.getElementById('prev');

    this.activatedRoute.queryParams.subscribe(({page}) => this.page = page);
    this.dataService.storageGenreIds.subscribe(data => this.genresList = data);

    if (this.totalPages > 500) {
      this.totalPages = 500;
    }

    if (e.target === nextPage) {
      if (this.page) {
        this.page++;
        if (this.page > this.totalPages) {
          this.page = 1;
        }
      } else {
        this.page = 2;
      }
    } else {
      if (this.page) {
        this.page--;
        if (this.page <= 0) {
          this.page = this.totalPages;
        }
      } else {
        this.page = this.totalPages;
      }
    }

    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: `${this.page}`,
        with_genres: `${this.genresList}`
      }
    })
  }

  toUp() {
    window.scrollTo(scrollX, 0);
  }
}
