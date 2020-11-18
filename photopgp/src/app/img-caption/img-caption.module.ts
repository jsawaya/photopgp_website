import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgCaptionRoutingModule } from './img-caption-routing.module';
import { ImageCaptionComponent } from './image-caption.component';

@NgModule({
  declarations: [
    ImageCaptionComponent
  ],
  exports: [
    ImageCaptionComponent
  ],
  imports: [
    CommonModule,
    ImgCaptionRoutingModule
  ]
})
export class ImgCaptionModule { }
