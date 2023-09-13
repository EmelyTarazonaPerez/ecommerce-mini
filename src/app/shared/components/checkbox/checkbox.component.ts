import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/models/product/products.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Output() evento = new EventEmitter<string[]>();

  filtro: string[] = []
  categories: Category[] = [
    { id: 1, name: 'technology' },
    { id: 2, name: 'clothes' },
    { id: 3, name: 'furniture' },
    { id: 4, name: 'accessories' }
  ]

  selectedProduct(item: string): void {
    if (this.filtro.indexOf(item) === -1) {
      this.filtro.push(item)
    } else {
      this.filtro.splice(this.filtro.indexOf(item), 1)
    }
    this.evento.emit(this.filtro)
  }
}
