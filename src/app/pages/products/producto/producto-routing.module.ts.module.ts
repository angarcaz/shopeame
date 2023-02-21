import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ProductoModuleTsModule } from './producto.module.ts.module';

const routes: Routes = [
  {
    path: '', component: ProductoModuleTsModule  
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductoRoutingModuleTsModule { }
