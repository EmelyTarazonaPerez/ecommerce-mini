import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/product/categories.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() title = '';
  @Input() color = '';
  @Output() evento = new EventEmitter<string[]>();

  activeMenu = false
  filtro: string[] = []
  categories: Category[] = [
    { id: 1, name: 'technology' },
    { id: 1, name: 'clothes' },
    { id: 1, name: 'furniture' },
    { id: 1, name: 'accessories' }
  ]
  changeColorText() {
    return this.color
  }
  toggeMenu() {
    this.activeMenu = !this.activeMenu
  }

  selectedProduct(item: string): void {
    if (this.filtro.indexOf(item) === -1) {
      this.filtro.push(item)
    } else {
      this.filtro.splice(this.filtro.indexOf(item), 1)
    }
    this.evento.emit(this.filtro)
  }

}
