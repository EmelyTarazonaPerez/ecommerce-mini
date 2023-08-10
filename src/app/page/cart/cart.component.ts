import { Component } from '@angular/core';
import { ModeloCart } from 'src/app/models/cart.modelo';
import { DataCartService } from 'src/app/services/data-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  property = 'false'
  dataCart!: ModeloCart[]
  precioUnid: number = 0
  constructor(private serviceDataCart: DataCartService) { }

  ngOnInit() {
    this.serviceDataCart.getCart().subscribe(data => {
      return this.dataCart = data.filter(item => item.idusuario == 1)
    })
  }

  pagarMetodo() {
    this.dataCart.forEach(element => {
      this.precioUnid = this.precioUnid + element.cantidad * element.precio
    });
    return this.precioUnid
  }
}




