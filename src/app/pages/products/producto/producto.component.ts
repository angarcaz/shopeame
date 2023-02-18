import { ProductoServicioService } from './../../../servicios/producto-servicio.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  productList : any [] = [];
  
  constructor(private product:ProductoServicioService){}

  ngOnInit(): void {
    this.product.getProducts().subscribe((data:any)=>{
      console.log(data)
    })
  }

}
  

  //productList: string[];
  //filteredList: string[];
  //filter: string;


  //constructor() {
   // this.filter = '';
    //this.productList = [];
    //this.filteredList = this.productList;
  //}

  //filtrar(filter: any) {
   // const newList: string[] = this.productList.filter(el => el.toLowerCase().includes(filter.trim().toLowerCase()));
   // this.filteredList = newList;
  //}
