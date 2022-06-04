import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbdRatingDecimalModule} from "./modules/movie/components/start-rating/rating-decimal.module";
import {MovieModule} from "./modules";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    UserInfoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbdRatingDecimalModule,
        MovieModule,
        ReactiveFormsModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
