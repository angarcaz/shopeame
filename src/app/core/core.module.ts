import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FechaPipe } from './footer/fecha.pipe';



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
    CommonModule
  ]
})

export class CoreModule { }
