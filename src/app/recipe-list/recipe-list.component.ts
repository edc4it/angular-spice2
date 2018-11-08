import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe.service";
import {Observable, Subject} from "rxjs";
import {switchMap} from "rxjs/operators"

@Component({
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],

})
export class RecipeListComponent implements OnInit {

  searchStream = new Subject<string>();

  recipes: Observable<Recipe[]>;

  constructor(private service: RecipeService ) { }

  ngOnInit(): void {
    this.recipes = this.searchStream.pipe(switchMap((s) => this.service.getAll(s)));
    setTimeout(() => this.searchStream.next(""), 0)
  }


}
