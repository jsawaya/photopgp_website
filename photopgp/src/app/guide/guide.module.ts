import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgCaptionModule } from '../img-caption/img-caption.module';
import { TableModule } from '../material/table.module';

import { GuideRoutingModule } from './guide-routing.module';
import { GuideComponent } from './guide.component';

@NgModule({
  declarations: [GuideComponent],
  imports: [
    CommonModule,
    ImgCaptionModule,
    TableModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
