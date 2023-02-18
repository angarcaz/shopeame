import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ListaProductosComponent } from './products/lista-productos/lista-productos.component';
import { ProductoComponent } from './products/producto/producto.component';
import { FormularioComponent } from './gestion/formulario/formulario.component';
import { SimuladorComponent } from './gestion/simulador/simulador.component';
import { VistaComponent } from './products/vista/vista.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListaProductosComponent,
    ProductoComponent,
    FormularioComponent,
    SimuladorComponent,
    VistaComponent
  ],

  exports: [
    HomeComponent,
    ListaProductosComponent,
    ProductoComponent,
    FormularioComponent,
    SimuladorComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PagesModule { }
