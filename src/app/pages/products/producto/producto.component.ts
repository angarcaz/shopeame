import { productInterface } from 'src/app/models/item-interface';
import { ProductoServicioService } from './../../../servicios/producto-servicio.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {


  // productList : any [] = [];
  id!: number;
  product!: productInterface
  
  constructor(private productoServicio: ProductoServicioService, private activateRoute: ActivatedRoute, private router:Router){}

  ngOnInit(): void {

    //Lee la ruta que ponemnos en el navegador y la guarda en la variable id
    this.activateRoute.paramMap.subscribe(params => {
      this.id = Number(params.get("id"))
    })

    //LLamamos al servicio que tiene la funcion getItem, que hace una petición individual 
    this.productoServicio.getItem(this.id).subscribe((data:any)=> {
      this.product = data;
    })

    this.productoServicio.postItem(this.id).subscribe((data:any)=>{
      this.product = data
    })
  }
  //Función para eliminar el elemento. Redirige a productos. 
  removeItem() {
    this.productoServicio.removeItem(this.id).subscribe((data:any) => {
      this.product = data
      this.router.navigate(["/productos"])
    })
  }


}










//PRUEBAS BUSCADOR


//   ngOnInit(): void {
//     this.product.getProducts().subscribe((data:any)=>{
//       console.log(data)
//     })
//   }

// }
  

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
