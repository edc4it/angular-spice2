import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { AppComponent } from './app.component';
import { AddReviewComponent } from './add-review/add-review.component';
import {FormsModule} from "@angular/forms";
import { SearchComponentComponent } from './search-component/search-component.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeFilterPipe,
    AppComponent,
    AddReviewComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
