import { Component, OnInit } from '@angular/core';
import { ModeloCart } from 'src/app/models/product/cart.modelo';
import { DataCartService } from 'src/app/services/data-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  property = 'false'
  dataCart!: ModeloCart[]

  constructor(private serviceDataCart: DataCartService) { }

  ngOnInit() {
    this.serviceDataCart.get().subscribe(data => {
      return this.dataCart = data.filter(item => item.idusuario == 1)
    })
  }

  pagarMetodo() {
    let precioUnid = 0
    this.dataCart.forEach(element => {
      precioUnid = precioUnid + element.quantity * element.price
    });
    return precioUnid * 0.19 + precioUnid
  }

  deleteProductCart<idProductT>(id:idProductT) {
    this.serviceDataCart.delete(id).subscribe(() => {
      const productIndex = this.dataCart.findIndex(item => item.id === id)
      this.dataCart.splice(productIndex, 1);
      this.pagarMetodo()
  })

}

}




