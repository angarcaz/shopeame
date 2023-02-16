import { ProductoServicioService } from './../../../servicios/producto-servicio.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {

  productsList: any[] = [];

  constructor(private productoServicio: ProductoServicioService) {}

  ngOnInit(): void {
    this.productoServicio.getProducts().subscribe((data:any) => {
      console.log(data)
      this.productsList = [...data];
    })
  }

}
