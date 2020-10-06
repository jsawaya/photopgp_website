import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './data.service';
import { CopyrightDirective } from './copyright.directive';
import { ButtonsComponent } from './buttons/buttons.component';
import { ImgCaptionModule } from './img-caption/img-caption.module';
import { TableModule } from './material/table.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CopyrightDirective,
    ButtonsComponent
   ],
  imports: [
    BrowserModule,
    // order matters: add HomeModule before AppRoutingModule
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ImgCaptionModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
