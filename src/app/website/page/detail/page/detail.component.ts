import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../models/product/products.model'
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  detail!: Product
  arrayQuantity: number[] = []
  showDomDetail  = true

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(){
    const indice = this.route.snapshot.params['id']
    this.dataService.findOne(indice).subscribe(data => {
        this.detail = data;
        //code
        for (let i = 1; i < this.detail.quantity + 1; i++) {
          this.arrayQuantity.push(i)
        }
      }, error => {
        console.log(error)
      })
  }

}
