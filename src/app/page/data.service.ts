import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/products.model";
import { ModeloCart } from "../models/cart.modelo";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/api/v1/products')
  }

  postCart(producto: ModeloCart): Observable<ModeloCart[]> {
    return this.http.post<ModeloCart[]>('http://localhost:5000/api/v1/cart', producto)
  }

  getCart(): Observable<ModeloCart[]> {
    return this.http.get<ModeloCart[]>('http://localhost:5000/api/v1/cart')
  }
}
