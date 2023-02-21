import { ListaProductosComponent } from './lista-productos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'primeng/rating/rating';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModuleTsModule } from './listaproductos-routing.module.ts.module';


@NgModule({
  declarations: [ListaProductosModule, ListaProductosComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ProductsRoutingModuleTsModule
  ]
})
export class ListaProductosModule { }
