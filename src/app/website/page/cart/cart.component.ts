import { Component, OnInit } from '@angular/core';
import { getOrdersByUser } from 'src/app/models/product/cart.modelo';
import {ServiceAuth} from '../../../services/auth.service'
import {DataCartService} from '../../../services/data-cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  property = 'false'
  dataCart!: getOrdersByUser[]

  constructor(private serviceAuth: ServiceAuth, private serviceDataCart: DataCartService ) { }

  ngOnInit():void {
    this.serviceAuth.orders().subscribe(
      (data) => {
        this.dataCart = data,
        console.log(this.dataCart)
      })
  }

  pagarMetodo():number {
    let precioUnid = 0
    this.dataCart.forEach(element => {
     precioUnid = precioUnid + element.quantity * element.price
    });
    return precioUnid
 }

  deleteProductCart<idProductT>(id:idProductT) {
   this.serviceDataCart.delete(id).subscribe(() => {
     const productIndex = this.dataCart.findIndex(item => item.id === id)
     this.dataCart.splice(productIndex, 1);
  })
}

}





