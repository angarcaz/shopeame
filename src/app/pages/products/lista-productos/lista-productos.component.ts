import { ProductoServicioService } from './../../../servicios/producto-servicio.service';
import { Component } from '@angular/core';
import { productInterface } from 'src/app/models/item-interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {

  productsList: productInterface[] = [];

  constructor(private productoServicio: ProductoServicioService) {}

  ngOnInit(): void {
    this.productoServicio.getProducts().subscribe((data: productInterface[]) => {
      this.productsList = [...data];
    })
  }

}

