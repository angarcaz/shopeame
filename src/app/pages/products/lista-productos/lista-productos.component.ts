import { ProductoServicioService } from './../../../servicios/producto-servicio.service';
import { Component } from '@angular/core';
import { productInterface } from 'src/app/models/item-interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {

//para el rating de estrellas
  starsArray=[1,2,3,4,5];
  rating = 0;

  starRating(sorting:any){
    this.rating = sorting
  }


//interface productos
  productList: productInterface[] = [];
  filteredProduct:any[] = [];
  val1!: number;


  constructor(private productoServicio: ProductoServicioService) {}
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

