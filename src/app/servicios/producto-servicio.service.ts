import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {

  products_url: string = "http://localhost:3000/newProducts"

  constructor(private http: HttpClient) { }

  public itemData = {
    id: "",
    name: "",
    price: "", 
    description: "",
    stars: "",
    image: ""
  }

  getProducts(){
    return this.http.get(this.products_url);
  }

  postItem(item:any) {
    return this.http.post(this.products_url,item)
  }

}
