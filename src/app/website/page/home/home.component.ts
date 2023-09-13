import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product/products.model'
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Mini ecommerce';
  product: Product[] = [];
  productFiltrado: Product[] = [];
  showDomDetail = false;
  productId: string | null = null;

  constructor(private dataService: DataService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.get().subscribe((data) => {
      this.product = data;
    });
    this.router.queryParamMap.subscribe(params => {
      this.productId = params.get('product')
    })
  }


  leakedProducts(data: string[]): void {
    if (data.length > 0 && data[0] !== '') {
      this.productFiltrado = this.product.filter(
        item => data.includes(item.category.name)
          || item.name.toLowerCase().includes(data[0]?.toLowerCase())
      )
    }
    else {
      this.productFiltrado = []
    }
  }

  closeDetail() {
    this.showDomDetail = false
  }


}
