import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EulaComponent } from './eula.component';

const routes: Routes = [
  { path: '', component: EulaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EulaRoutingModule { }
