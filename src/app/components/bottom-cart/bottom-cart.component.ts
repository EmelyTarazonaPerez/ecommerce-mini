import { Component, Input } from '@angular/core';
import { ModeloCart } from 'src/app/models/cart.modelo';
import { Product } from 'src/app/models/products.model';
import { DataService } from 'src/app/page/data.service';

@Component({
  selector: 'app-bottom-cart',
  templateUrl: './bottom-cart.component.html',
  styleUrls: ['./bottom-cart.component.css']
})
export class BottomCartComponent {
  @Input() product!: Product[];
  dataCart!:ModeloCart
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataCart = {
      imagen: this.product[0].imagen,
      nombre: this.product[0].nombre,
      precio: this.product[0].precio,
      cantidad: 1,
      idusuario: 1,
      idproducto: this.product[0].Id_producto
    }
    return this.dataCart
  }

  enviarACart() {
    alert('su producto ya fue enviado a carritos')
    console.log(this.dataCart)
    this.dataService.postCart(this.dataCart).subscribe( data => console.log(data))
  }

}
