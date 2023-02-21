import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ListaProductosModule } from './listaproductos.module';

const routes: Routes = [
  {
    path: '', component: ListaProductosModule  
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductsRoutingModuleTsModule { }
