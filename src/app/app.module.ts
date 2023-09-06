import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product/product.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { DetailComponent } from './page/detail/detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BottomCartComponent } from './components/bottom-cart/bottom-cart.component';
import { CartComponent } from './page/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './page/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const appRoutes: Routes = [

  { path: 'Code-Marketplace', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component:  LoginComponent},
  { path: 'detail-product/:id', component: DetailComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DetailComponent,
    BottomCartComponent,
    CartComponent,
    LoginComponent,
    SearchComponent,
    CheckboxComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
