import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { CartComponent } from './page/cart/cart.component';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class WebsiteModule { }
