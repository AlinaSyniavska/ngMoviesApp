import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', loadChildren: () => import('./modules').then(value => value.MovieModule)},
    {path: 'movies/:id', loadChildren: () => import('./modules').then(value => value.MovieModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
