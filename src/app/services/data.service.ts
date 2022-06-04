import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenre} from "../modules/movie/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storageGenres = new BehaviorSubject<IGenre[]>([]);

  pageNumber = new BehaviorSubject<number>(1);

  storageGenreIds = new BehaviorSubject<string>('');

  userColorTheme = new BehaviorSubject<string>('light');

  constructor() {
  }
}
