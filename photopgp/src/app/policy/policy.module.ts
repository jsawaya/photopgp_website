import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgCaptionModule } from '../img-caption/img-caption.module';
import { TableModule } from '../material/table.module';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';

@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    ImgCaptionModule,
    TableModule,
    PolicyRoutingModule
  ]
})
export class PolicyModule { }
