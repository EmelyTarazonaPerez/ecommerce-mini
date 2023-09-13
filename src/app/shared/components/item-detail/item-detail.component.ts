import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/products.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

  // @Input() productId: string | null = null;
  @Input()
  set productId(id: string | null) {
    if (id) {
      this.onShowDetail(id);
    }
  }

  detail!:Product
  showDomDetail = false
  arrayQuantity = []

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute)
  { }

  onShowDetail(idProduct: string) {
    if (!this.showDomDetail) {
      this.showDomDetail = true
    }
    this.dataService.findOne(idProduct).subscribe(
      (data) => this.detail = data)
  }

  closeDetail(){
    this.showDomDetail = false
  }
}
