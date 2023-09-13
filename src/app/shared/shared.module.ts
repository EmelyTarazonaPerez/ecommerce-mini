import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomCartComponent } from './components/bottom-cart/bottom-cart.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    ProductComponent,
    FooterComponent,
    BottomCartComponent,
    CheckboxComponent,
    ItemDetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductComponent,
    FooterComponent,
    BottomCartComponent,
    CheckboxComponent,
    ItemDetailComponent,
    SearchComponent
  ]
})
export class SharedModule { }
