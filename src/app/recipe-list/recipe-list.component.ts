import {Component, OnInit, ViewChild} from '@angular/core';
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe.service";
import {Observable, Subject} from "rxjs";
import {switchMap} from "rxjs/operators";
import {SearchComponent} from "../search-component/search.component";

@Component({
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],

})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]>;

  @ViewChild(SearchComponent) searchComponent: SearchComponent;

  constructor(private service: RecipeService ) { }

  ngOnInit(): void {
    this.recipes = this.searchComponent.searchValueChange.pipe(switchMap((s) => this.service.getAll(s)));
    setTimeout(() => this.searchComponent.searchValueChange.emit(""), 0);
  }


}
