import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../services";
import {ColorThemeService} from "../../services/color-theme.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, DoCheck {

  userForm: FormGroup;

  constructor(private colorThemeService: ColorThemeService, private dataService: DataService) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.colorThemeService.changeColorTheme('user-photo');
  }

  _createForm(): void {
    this.userForm = new FormGroup({
      colorTheme: new FormControl('light'),
    })
  }

  changeColorTheme() {
    this.dataService.userColorTheme.next(this.userForm.get('colorTheme')?.value);
  }
}
