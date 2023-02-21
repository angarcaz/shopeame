import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModuleTsModule } from '../lista-productos/listaproductos-routing.module.ts.module';
import { ProductoComponent } from './producto.component';



@NgModule({
  declarations: [ProductoComponent],
  imports: [
    CommonModule,
    ProductsRoutingModuleTsModule
  ]
})
export class ProductoModuleTsModule { }
