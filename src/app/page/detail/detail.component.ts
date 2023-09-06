import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product/products.model'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {

  detail!: Product
  arrayQuantity: number[] = []
  showDomDetail  = true
  // eslint-disable-next-line @angular-eslint/no-input-rename

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){
    const indice = this.route.snapshot.params['id']
    this.dataService.findOne(indice).subscribe(data => {
        this.detail = data;
        //code
        for (let i = 1; i < this.detail.quantity + 1; i++) {
          this.arrayQuantity.push(i)
          console.log(i)
        }
      }, error => {
        console.log(error)
      })
  }

}
