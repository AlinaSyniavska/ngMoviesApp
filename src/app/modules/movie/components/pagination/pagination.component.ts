import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input()
  totalPages: number;
  page: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.page = 1;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('pages:' + this.totalPages);
  }

  nextPage() {
    this.activatedRoute.queryParams.subscribe(({page}) => this.page = page);

    if (this.page) {
      this.page++;
    } else {
      this.page = 2;
    }

    // if (this.page > this.totalPages) {
    if (this.page > 500) {
      this.page = 1;
    }

    this.router.navigate(['.'], {relativeTo: this.activatedRoute, queryParams: {page: `${this.page}`}})
  }

  prevPage() {
    this.activatedRoute.queryParams.subscribe(({page}) => this.page = page);
    if (this.page) {
      this.page--;
    } else {
      this.page = 500;
    }
    if (this.page <= 0) {
      // this.page = this.totalPages;
      this.page = 500;
    }

    this.router.navigate(['.'], {relativeTo: this.activatedRoute, queryParams: {page: `${this.page}`}})
  }
}
