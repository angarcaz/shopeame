import { ProductoComponent } from './pages/products/producto/producto.component';

import { FormularioComponent } from './pages/gestion/formulario/formulario.component';
import { ListaProductosComponent } from './pages/products/lista-productos/lista-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"productos", component: ListaProductosComponent },
  { path:"gestion", component: FormularioComponent },
  { path: "productos/:id", component: ProductoComponent },
  { path: "about",loadChildren: ()=>
    import('./pages/lazy-loading/about/about.component').then(m => m.AboutComponent)},
  { path:"**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
