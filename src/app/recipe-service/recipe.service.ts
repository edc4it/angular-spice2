import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Recipe[]> {
    const httpParams = new HttpParams().set("sort", "datePublished");
    return this.http.get("http://localhost:5000/api/recipes",{
      params: httpParams
    }) as Observable<Recipe[]>;
  }

}
