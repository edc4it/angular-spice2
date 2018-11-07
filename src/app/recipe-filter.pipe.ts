import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "./recipe-service/recipe";

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

  transform(rs: Recipe[], s: string): Recipe[] {
    return rs.filter((r) => r.title.toLowerCase().includes(s.toLowerCase()))
  }

}
