import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, switchMap} from "rxjs/operators"
import {RecipeService} from "../recipe-service/recipe.service";
import {Recipe} from "../../../../resources/lab-02/src/app/recipe-service/recipe";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  private recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    let f = this.activatedRoute.params
      .pipe(map((params) => params.id))
      .pipe(switchMap((id) => this.recipeService.get(id)))
      .subscribe(
        (r) => this.recipe = r,
        (e) => {
          this.toastr.error("problem fetching recipe", e.message);
          console.error("problem fetching recipe", e.message)
          this.router.navigate(["recipe-list"])
        })
  }

}
