import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";


const routes: Routes = [
  {
    path: 'recipe-list',
    component: RecipeListComponent
  },
  {
    path: '',
    redirectTo: '/recipe-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
