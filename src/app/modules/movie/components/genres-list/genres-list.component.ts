import {Component, DoCheck, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

import {DataService} from "../../../../services";
import {IGenre} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit, DoCheck {

  genresList: IGenre[];
  form: FormGroup;
  status: boolean;

  constructor(private fb: FormBuilder, private dataService: DataService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {  }

  ngDoCheck(): void {
    this.dataService.storageGenres.subscribe(data => this.genresList = data);
  }

  _createForm(): void {
    this.form = this.fb.group({
      selectedGenres: new FormArray([])
    });
  }

  onCheckboxChange(event: any) {
    const selectedGenres = (this.form.controls['selectedGenres'] as FormArray);
    if (event.target.checked) {
      selectedGenres.push(new FormControl(event.target.value));
    } else {
      const index = selectedGenres.controls
        .findIndex(x => x.value === event.target.value);
      selectedGenres.removeAt(index);
    }
  }

  submit() {
    // console.log(this.form.value);
    this.dataService.storageGenreIds.next(this.form.value.selectedGenres.join(','));
    this.dataService.pageNumber.next(1);

    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: 1,
        with_genres: this.form.value.selectedGenres.join(',')
      }
    })

    // this.status = false;
    // this.form.reset();
  }
}
