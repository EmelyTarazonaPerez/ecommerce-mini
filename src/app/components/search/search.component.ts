import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  search: string[] = []
  @Output() EventSearch = new EventEmitter<string[]>()

  saveWordsToArray(event: Event) {
    const element = event.target as HTMLInputElement;
    if (this.search.length > 0) this.search.shift()
    this.search.push(element.value)
    this.EventSearch.emit(this.search)
  }

}
