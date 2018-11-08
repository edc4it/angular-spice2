import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { AppComponent } from './app.component';
import { AddReviewComponent } from './add-review/add-review.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search-component/search.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeFilterPipe,
    AppComponent,
    AddReviewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
