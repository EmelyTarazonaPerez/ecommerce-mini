import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/products.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Mini ecommerce';
  http = inject(HttpClient)
  products: Product[] = [];
  productsFiltros: Product[] =[];

  ngOnInit() {
    this.http.get<Product[]>('http://localhost:5000/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }

  arreglo(data:any[]): void{
    this.productsFiltros = this.products.filter(item => data.includes(item.filtro))
  }
}
