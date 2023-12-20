import { Component, Input, OnInit } from '@angular/core';
import { ModeloCart, getOrdersByUser } from 'src/app/models/product/cart.modelo';
import { Product } from 'src/app/models/product/products.model';
import { ServiceAuth } from 'src/app/services/auth.service';
import { DataCartService } from 'src/app/services/data-cart.service';

@Component({
  selector: 'app-bottom-cart',
  templateUrl: './bottom-cart.component.html',
  styleUrls: ['./bottom-cart.component.css']
})
export class BottomCartComponent {

  dataCart!: getOrdersByUser
  product!: Product
  idusuario!: number | undefined

  constructor(private serviceDataCart: DataCartService, private getProfile: ServiceAuth) { }



  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('product')
  set changeProduct(product: Product) {
    this.product = product
    this.getProfile.$myProfile.subscribe(data => this.idusuario = data?.id_usuario)
    //code
    this.dataCart = {
      "imagen": product.image,
      "name": product.name,
      "price": product.price,
      "quantity": product.quantity,
      "idusuario": this.idusuario,
      "idproducto": product.idproducto
    }
  }


  enviarACart() {
    if (this.idusuario) {
      this.serviceDataCart.post(this.dataCart).subscribe((data => console.log(data)))
      alert('su producto ya fue enviado a carritos')
    }
    else {
      alert('No estas logeado')
    }
  }

}
