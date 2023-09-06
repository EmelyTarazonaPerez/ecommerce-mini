import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/products.model'
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Mini ecommerce';
  product: Product[] = [];
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  showDomDetail = false;
  productId: string | null = null;

  constructor(private dataService: DataService, private router: ActivatedRoute ) { }

  ngOnInit():void {
    this.dataService.get().subscribe((data) => {
      this.product = data;
    });
    this.router.queryParamMap.subscribe(params => {
      this.productId = params.get('product')
      console.log('Home' + this.productId)
    })
  }

  TitleDinamico(data: string[]) {
    if (data.length == 1) {
      this.title = data[0]
    }
    else if (data.length !== 4) {
      this.title = 'Products'
    } else {
      this.title = 'All products'
    }
  }

  leakedProducts(data: string[]): void {
    if (data[0] === '') {
      this.ngOnInit()
      this.title = 'Products'
    }
    else if (data.length > 0) {
      this.TitleDinamico(data)
      this.product = this.product.filter(
        item => item.name.toLowerCase().includes(data[0].toLowerCase()) || data.includes(item.category.name))
    }
    else {
      this.ngOnInit()
      this.title = 'Products'
    }
  }

  closeDetail() {
    this.showDomDetail = false
  }


}
