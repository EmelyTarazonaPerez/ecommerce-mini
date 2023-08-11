import { Component, OnInit } from '@angular/core';
import { ModeloCart } from 'src/app/models/cart.modelo';
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
    this.serviceDataCart.getCart().subscribe(data => {
      return this.dataCart = data.filter(item => item.idusuario == 1)
    })
  }

  pagarMetodo() {
    let precioUnid = 0
    this.dataCart.forEach(element => {
      precioUnid = precioUnid + element.cantidad * element.precio
    });
    return precioUnid
  }
}




