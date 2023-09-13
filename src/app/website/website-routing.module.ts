import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { CartComponent } from './/page/cart/cart.component';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RecoveryComponent } from './page/recovery/recovery.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [{
  path:'', component: LayoutComponent,
  children: [
    {path: '', redirectTo:'code-marketplace', pathMatch:'full'},
    { path: 'code-marketplace', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
      path: 'cart',
      canActivate: [authGuard],
      component: CartComponent
    },
    { path: 'login', component:  LoginComponent},
    {
      path: 'product',
      loadChildren: ()=> import('./page/detail/detail.module').then(m => m.DetailModule),
      data: {
        preload: true,
      }
    },
    { path: 'recovery', component: RecoveryComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
