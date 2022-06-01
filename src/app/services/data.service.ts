import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenre} from "../modules/movie/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // storageGenres = new BehaviorSubject<IGenres>({genres: []});
  storageGenres = new BehaviorSubject<IGenre[]>([]);

  constructor() {
  }
}
