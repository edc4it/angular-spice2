import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe.service";
import {Observable} from "rxjs";

@Component({
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],

})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]>;

  constructor(readonly service: RecipeService) {
  }

  search(s? : string) {
    this.recipes = this.service.getAll(s);
  }

  ngOnInit() {
    this.search()
  }

}
