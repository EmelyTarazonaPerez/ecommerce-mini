import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product/products.model'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  product!: Product;
  indice!: string;
  statusDetail: "loading" | "error" | "init" | "succes" = "init"

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.statusDetail = "loading"
    this.indice = this.route.snapshot.params['id']
    this.dataService.findOne(this.indice)
    .subscribe(data => {
        this.product = data
        this.statusDetail = "succes"
      }, error => {
        console.log(error)
        this.statusDetail = "error"
      })
  }
}
