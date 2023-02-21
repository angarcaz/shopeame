import { ProductoModuleTsModule } from './producto/producto.module.ts.module';
import { ListaProductosModule } from './lista-productos/listaproductos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListaProductosModule,
    ProductoModuleTsModule
  ]
})
export class ProductsModule { }
