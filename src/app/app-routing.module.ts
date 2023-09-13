import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pag404Component } from './pag404/pag404.component';
import { CostumPreloadService } from './services/preload/costum-preload.service'


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
    data: {
      preload: true,
    }
  },
  { path: 'cms', loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule) },
  { path: '***', component: Pag404Component },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CostumPreloadService,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
