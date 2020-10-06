import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInfoComponent } from './home-info.component';

const routes: Routes = [
  { path: 'home', component: HomeInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
