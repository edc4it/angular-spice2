import { Component, OnInit } from '@angular/core';
import {testData} from "../data/mock-recipes";
import {Recipe} from "../recipe-service/recipe";

@Component({
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],

})
export class RecipeListComponent implements OnInit {

  recipes = testData.sort((r1: Recipe, r2: Recipe) => r2.datePublished < r1.datePublished ? -1 : 1);

  constructor() { }

  ngOnInit() {
  }

}
