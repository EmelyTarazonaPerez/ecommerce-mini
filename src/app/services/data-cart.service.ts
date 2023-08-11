import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ModeloCart } from '../models/cart.modelo';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCartService {

  private myCart = new BehaviorSubject<ModeloCart[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor(private http: HttpClient) { }

  postCart(producto: ModeloCart): Observable<ModeloCart> {
    return this.http.post<ModeloCart>('http://localhost:5000/api/v1/cart', producto)
  }

  getCart(): Observable<ModeloCart[]> {
    return this.http.get<ModeloCart[]>('http://localhost:5000/api/v1/cart')
  }
}
