import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ModeloCart } from 'src/app/models/cart.modelo';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  dataCart!: ModeloCart[]
  precioUnid: number = 0
  constructor(private serviceData: DataService) { }

  ngOnInit() {
    this.serviceData.getCart().subscribe(data => {
      return this.dataCart = data.filter(item => item.idusuario == 1)
    })
  }

  pagarMetodo(){
    this.dataCart.forEach(element => {
      this.precioUnid = this.precioUnid + element.cantidad * element.precio
    });
    return this.precioUnid
  }
}




