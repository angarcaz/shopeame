import { ListaProductosModule } from './lista-productos/listaproductos.module';
import { ProductsModule } from './products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'lista-productos', loadChildren: () =>
    import('./lista-productos/listaproductos.module').then(m => m.ListaProductosModule) 
  },
  {
    path: 'producto', loadChildren: () =>
    import('./producto/producto.module.ts.module').then(m => m.ProductoModuleTsModule) 
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
