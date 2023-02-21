import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'primeng/rating/rating';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsModule],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class ProductsModule { }
