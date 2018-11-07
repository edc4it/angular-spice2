import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'recipe-search',
  template: `
     <div class="searchForm">
        <input #search (keyup)="textChanged(search.value)" type="text" [placeholder]="hint"/>
     </div>`,
  inputs: ["hint"]
})
export class SearchComponentComponent  {

  @Output() searchValueChange = new EventEmitter<string>();

  textChanged(s: string) {
     this.searchValueChange.emit(s);
  }

}
