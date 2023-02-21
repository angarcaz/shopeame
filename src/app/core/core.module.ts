import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FechaPipe } from './footer/fecha.pipe';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FechaPipe
  ],

  exports: [
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    PagesModule,
  ]
})

export class CoreModule { }
