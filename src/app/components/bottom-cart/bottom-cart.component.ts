import { Component, Input } from '@angular/core';
import { ModeloCart } from 'src/app/models/cart.modelo';
import { Product } from 'src/app/models/products.model';
import { DataCartService } from 'src/app/services/data-cart.service';

@Component({
  selector: 'app-bottom-cart',
  templateUrl: './bottom-cart.component.html',
  styleUrls: ['./bottom-cart.component.css']
})
export class BottomCartComponent {

  dataCart!: ModeloCart
  product!: Product[]

  @Input('product')
  set changeProduct(product: Product[]) {
    this.product = product
    //code
    this.dataCart = {
      imagen: this.product[0].imagen,
      nombre: this.product[0].nombre,
      precio: this.product[0].precio,
      cantidad: 1,
      idusuario: 1,
      idproducto: this.product[0].Id_producto
    }
  }

  constructor(private serviceDataCart: DataCartService) { }

  enviarACart() {
    this.serviceDataCart.postCart(this.dataCart).subscribe(data =>  this.dataCart = data)
    alert('su producto ya fue enviado a carritos')
  }

}
