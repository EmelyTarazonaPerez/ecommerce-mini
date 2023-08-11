import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/products.model'
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  product!: Product[];
  http = inject(HttpClient)
  indice!: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.indice = this.route.snapshot.params['id']
    this.dataService.getProductID(this.indice).subscribe(data => this.product = data)
  }
}
