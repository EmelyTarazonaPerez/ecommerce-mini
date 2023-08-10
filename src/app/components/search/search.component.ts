import { Component, EventEmitter, Output } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  search: any[] = []
  @Output() EventSearch = new EventEmitter<any[]>()

  guardarPalabrasEnArray(event: Event) {
    /* proceso de guardado */
    let element = event.target as HTMLInputElement;
    if (this.search.length > 0) this.search.shift()
    this.search.push(element.value)
    console.log(this.search)

    /*guardar informacion en EventSearch*/
    this.EventSearch.emit(this.search)
  }

}
