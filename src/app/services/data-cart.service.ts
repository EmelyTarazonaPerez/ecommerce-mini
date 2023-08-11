import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ModeloCart } from '../models/cart.modelo';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCartService {

  private apiUrl = 'http://localhost:5000/api/v1/cart'
  private myCart = new BehaviorSubject<ModeloCart[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor(private http: HttpClient) { }

  postCart(producto: ModeloCart): Observable<ModeloCart> {
    return this.http.post<ModeloCart>(this.apiUrl, producto)
  }

  getCart(): Observable<ModeloCart[]> {
    return this.http.get<ModeloCart[]>(this.apiUrl)
  }

  delete(id: string) {
    return this.http.delete<string>(`${this.apiUrl}/${id}`)
  }


}
