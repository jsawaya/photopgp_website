import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgCaptionModule } from '../img-caption/img-caption.module';
import { TableModule } from '../material/table.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutInfoComponent } from './about-info.component';

@NgModule({
  declarations: [AboutInfoComponent],
  imports: [
    CommonModule,
    ImgCaptionModule,
    TableModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
