import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInfoComponent } from './home/home-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomPreloadingService } from './custom-preloading.service';

const routes: Routes = [
  { path: '', component: HomeInfoComponent },
  // { path: 'path/:routeParam', component: MyComponent },
  // { path: 'staticPath', component: ... },
  // { path: '**', component: ... },
  // { path: 'oldPath', redirectTo: '/staticPath' },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { preload: true }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { preload: true }
  },
  {
    path: 'guide',
    loadChildren: () => import('./guide/guide.module').then(m => m.GuideModule),
    data: { preload: true }
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
    data: { preload: true }
  },
  {
    path: 'eula',
    loadChildren: () => import('./eula/eula.module').then(m => m.EulaModule),
    data: { preload: true }
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule),
    data: { preload: true }
  },
  {
    path: 'links',
    loadChildren: () => import('./links/links.module').then(m => m.LinksModule),
    data: { preload: true }
  },
  { path: '**', component: PageNotFoundComponent }
];

// enableTracing: true -- shows debugging router events on browser console

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: CustomPreloadingService, useHash: true, relativeLinkResolution: 'legacy' })],
  //    {preloadingStrategy: CustomPreloadingService, enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

