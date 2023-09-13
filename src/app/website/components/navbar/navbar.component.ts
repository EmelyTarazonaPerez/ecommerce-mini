import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Category } from 'src/app/models/product/products.model';
import { User } from 'src/app/models/user.model';
import { ServiceAuth } from 'src/app/services/auth.service';
import { ServiceToken } from 'src/app/services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title = '';
  @Input() color = '';
  @Output() evento = new EventEmitter<string[]>();
  showProfile: User | null = null
  activeMenu = false
  filtro: string[] = []

  categories: Category[] = [
    { id: 1, name: 'technology' },
    { id: 1, name: 'clothes' },
    { id: 1, name: 'furniture' },
    { id: 1, name: 'accessories' }
  ]

  constructor(
    private serviceAuth: ServiceAuth,
    private serviceToken: ServiceToken,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.serviceAuth.$myProfile.subscribe(
      data => {
        this.showProfile = data,
        console.log(data)})
  }

  selectedProduct(item: string): void {
    if (this.filtro.indexOf(item) === -1) {
      this.filtro.push(item)
    } else {
      this.filtro.splice(this.filtro.indexOf(item), 1)
    }
    this.evento.emit(this.filtro)
  }

  changeColorText() {
    return this.color
  }

  toggeMenu() {
    this.activeMenu = !this.activeMenu
  }

  logout() {
    this.serviceToken.removeToken()
    this.serviceAuth.myProfile.next(null)
  }

}
