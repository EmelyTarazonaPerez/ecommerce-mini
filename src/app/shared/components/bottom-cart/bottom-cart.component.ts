import { Component, Input } from '@angular/core';
import { ModeloCart } from 'src/app/models/product/cart.modelo';
import { Product } from 'src/app/models/product/products.model';
import { DataCartService } from 'src/app/services/data-cart.service';

@Component({
  selector: 'app-bottom-cart',
  templateUrl: './bottom-cart.component.html',
  styleUrls: ['./bottom-cart.component.css']
})
export class BottomCartComponent {

  dataCart!: ModeloCart
  product!: Product

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('product')
  set changeProduct(product: Product) {
    this.product = product
    //code
    this.dataCart = {
      image: this.product.image,
      name: this.product.name,
      price: this.product.price,
      quantity: 1,
      idusuario: 1,
      idproducto: this.product.idproducto
    }
  }

  constructor(private serviceDataCart: DataCartService) { }

  enviarACart() {
    this.serviceDataCart.post(this.dataCart).subscribe()
    alert('su producto ya fue enviado a carritos')
  }

}
