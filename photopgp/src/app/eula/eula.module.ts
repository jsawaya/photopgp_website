import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgCaptionModule } from '../img-caption/img-caption.module';
import { TableModule } from '../material/table.module';

import { EulaRoutingModule } from './eula-routing.module';
import { EulaComponent } from './eula.component';

@NgModule({
  declarations: [EulaComponent],
  imports: [
    CommonModule,
    ImgCaptionModule,
    TableModule,
    EulaRoutingModule
  ]
})
export class EulaModule { }
