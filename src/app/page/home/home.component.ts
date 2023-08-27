import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/products.model'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Mini ecommerce';
  product: Product[] = [];
  productsFiltros: Product[] = [];
  today = new Date()
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get().subscribe((data) => {
      this.product = data;
    })
  }

  leakedProducts(data: string[]): void {
    if (data.length > 0) {
      this.productsFiltros = this.product.filter(item =>
        item.name.toLowerCase().includes(data[0].toLowerCase()) ||
        data.includes(item.category.name))
    } else {
      this.productsFiltros = []
    }
    this.productsFiltros
  }
}
