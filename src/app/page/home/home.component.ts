import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/products.model'
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) { }

  title = 'Mini ecommerce';
  product: Product[] = [];
  productsFiltros: Product[] = [];

  ngOnInit() {
    this.dataService.getProduct().subscribe((data) => {
      this.product = data;
    })
  }

  arreglo(data: any[]): void {
    if(data.length > 0){
      this.productsFiltros = this.product.filter(item => data.includes(item.filtro) || item.nombre.toLowerCase().includes(data[0].toLowerCase()))
    } else{
      this.productsFiltros = []
    }
    console.log(data)
    this.productsFiltros
  }
}
