import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HomeComponent} from '../home/home.component'
import { Product } from '../../models/products.model'
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  product: Product[] = [];
  http = inject(HttpClient)
  indice!: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    this.indice = this.route.snapshot.params['id']
    this.dataService.getProduct().subscribe((data) => {
      this.product = data.filter(item => item.Id_producto == this.indice);
    })
  }
}
