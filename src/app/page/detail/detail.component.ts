import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HomeComponent} from '../home/home.component'
import { Product } from '../../models/products.model'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  service = new HomeComponent()
  products: Product[] = [];
  http = inject(HttpClient)

  indice!: number;
  constructor(private route:ActivatedRoute){
  }

  ngOnInit(){
    this.indice = this.route.snapshot.params['id']
    console.log(typeof(this.indice))
    this.http.get<Product[]>('http://localhost:5000/api/v1/products')
    .subscribe((data) => {
      console.log(data)
      this.products = data.filter(item => item.Id_producto == this.indice);
    });
  }

}
