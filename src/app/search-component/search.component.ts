import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'recipe-search',
  template: `
     <div class="searchForm">
        <input #search (keyup)="textChanged(search.value)" type="text" [placeholder]="hint"/>
     </div>`,
  inputs: ["hint"]
})
export class SearchComponent  {

  @Output() searchValueChange = new EventEmitter<string>();

  textChanged(s: string) {
     this.searchValueChange.emit(s);
  }

}
