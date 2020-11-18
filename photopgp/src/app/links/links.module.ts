import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgCaptionModule } from '../img-caption/img-caption.module';
import { TableModule } from '../material/table.module';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';

@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    ImgCaptionModule,
    TableModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }
