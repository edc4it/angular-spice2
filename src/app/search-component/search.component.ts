import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'recipe-search',
  template: `
     <div class="searchForm">
        <input [formControl]="searchControl" type="text" [placeholder]="hint"/>
     </div>`,
  inputs: ["hint"]
})
export class SearchComponent  {

  searchControl = new FormControl();

  @Output() searchValueChange = new EventEmitter<string>();

  constructor() {
    this.searchControl.valueChanges.pipe(debounceTime(400),distinctUntilChanged())
      .subscribe((event) => this.searchValueChange.emit(event));
  }

}
