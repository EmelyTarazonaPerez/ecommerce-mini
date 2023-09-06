import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../../models/product/products.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() idProduct = new EventEmitter<string>();



}
