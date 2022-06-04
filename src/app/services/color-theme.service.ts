import {Injectable} from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {

  constructor(private dataService: DataService) {
  }

  changeColorTheme(className: string): void {
    const mainElement = document.getElementsByClassName(className)[0] as HTMLElement;

    this.dataService.userColorTheme.subscribe(data => {
      if (data === 'light') {
        mainElement?.classList.remove('darkBg');
        mainElement?.classList.add('lightBg');
      } else {
        mainElement?.classList.remove('lightBg');
        mainElement?.classList.add('darkBg');
      }
    })
  }
}
