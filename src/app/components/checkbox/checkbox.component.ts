import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/categories.model'
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  @Output() evento = new EventEmitter<any[]>();
  filtro: any[] = []
  categories: Category[] = [
    { id: 1, name: 'technology' },
    { id: 1, name: 'clothes' },
    { id: 1, name: 'furniture' },
    { id: 1, name: 'accessories' }
  ]

  verificar(item: string): void {
    if (this.filtro.indexOf(item) === -1) {
      this.filtro.push(item)
    } else {
      this.filtro.splice(this.filtro.indexOf(item), 1)
    }
    this.evento.emit(this.filtro)
  }

}

