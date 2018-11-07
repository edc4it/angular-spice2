import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RecipeListComponent]
})
export class AppModule { }
