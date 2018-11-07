import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe.service";

@Component({
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],

})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(readonly service: RecipeService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe((recipe) => this.recipes.push(recipe));
  }

}
