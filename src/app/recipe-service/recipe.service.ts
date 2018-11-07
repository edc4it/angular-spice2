import {Injectable} from "@angular/core";
import {testData} from "../data/mock-recipes";
import {Recipe} from "./recipe";
import {Observable} from "rxjs";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getAll(): Observable<Recipe> {
    //return from(testData)
    return new Observable<Recipe>((observable) => {
      const sortedRecipes = testData.sort((r1: Recipe, r2: Recipe) => r2.datePublished < r1.datePublished ? -1 : 1);
      sortedRecipes.forEach(r => observable.next(r));
    })
  }

}
