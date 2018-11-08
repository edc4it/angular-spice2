import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {AddReviewComponent} from "./add-review/add-review.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";


const routes: Routes = [
  {
    path: 'recipe-list',
    component: RecipeListComponent
  },
  {
    path: 'review/add',
    component: AddReviewComponent
  },
  {
    path: "recipe/:id",
    component: RecipeDetailsComponent
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
