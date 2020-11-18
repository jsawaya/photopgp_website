import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgCaptionModule } from '../img-caption/img-caption.module';
import { TableModule } from '../material/table.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeInfoComponent } from './home-info.component';

@NgModule({
  declarations: [HomeInfoComponent],
  imports: [
    CommonModule,
    ImgCaptionModule,
    TableModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
