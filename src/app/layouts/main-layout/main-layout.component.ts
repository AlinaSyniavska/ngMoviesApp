import {Component, DoCheck, OnInit} from '@angular/core';
import {DataService} from "../../services";
import {UserInfoComponent} from "../../components/user-info/user-info.component";
import {ColorThemeService} from "../../services/color-theme.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, DoCheck {

  constructor(private dataService: DataService, private colorThemeService: ColorThemeService) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    const mainElement = document.getElementsByClassName('wrap')[0] as HTMLElement;
    const genresListElement = document.getElementsByClassName('lightBg')[0] as HTMLElement;

    this.dataService.userColorTheme.subscribe(data => {
      if (data === 'light') {
        mainElement?.classList.remove('dark');
        mainElement?.classList.add('light');
        genresListElement?.classList.remove('darkBg');
        genresListElement?.classList.add('lightBg');

      } else {
        mainElement?.classList.remove('light');
        mainElement?.classList.add('dark');
        genresListElement?.classList.remove('lightBg');
        genresListElement?.classList.add('darkBg');
      }
    })

    this.colorThemeService.changeColorTheme('app-genres-list');
  }
}
