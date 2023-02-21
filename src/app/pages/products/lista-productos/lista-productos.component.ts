import { ProductoServicioService } from './../../../servicios/producto-servicio.service';
import { Component } from '@angular/core';
import { productInterface } from 'src/app/models/item-interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {

  productList: productInterface[] = [];
  filteredProduct:any[] = [];
  lista = false;
  cuadricula = true;


  constructor(private productoServicio: ProductoServicioService) {}

    verCuadricula(){
      this.lista = false;
      this.cuadricula = true;
    }

    verLista(){
      this.lista = true;
      this.cuadricula = !this.cuadricula;
    }

    filtrar(filtro:any) {
    this.filteredProduct=this.productList.filter((product)=>product.name.includes(filtro));
    console.log(this.filteredProduct);
   }

  ngOnInit(): void {
    this.productoServicio.getProducts().subscribe((data: productInterface[]) => {
      this.productList = [...data];
      this.filteredProduct = [...data];
    })
  }

}

