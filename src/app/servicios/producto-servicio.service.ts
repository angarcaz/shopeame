import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { productInterface } from 'src/app/models/item-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {

  products_url: string = "http://localhost:3000/newProducts"

  constructor(private http: HttpClient) { }


  //intentar poner aquí interfaz:
  public itemData = {
    id: "",
    name: "",
    price: "", 
    description: "",
    stars: "",
    image: ""
  }

  getProducts(): Observable<productInterface[]>{
    return this.http.get<productInterface[]>(this.products_url);
  }

  postItem(item:any) {
    return this.http.post(this.products_url,item)
  }

}
