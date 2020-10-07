import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // for html

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CopyrightDirective } from './copyright.directive';
import { ImgCaptionModule } from './img-caption/img-caption.module';
import { TableModule } from './material/table.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CopyrightDirective
   ],
  imports: [
    BrowserModule,
    // order matters: add HomeModule before AppRoutingModule
    HomeModule,
    AppRoutingModule,
    ImgCaptionModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
