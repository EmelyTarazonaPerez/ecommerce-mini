import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ModeloCart } from '../models/product/cart.modelo';
import { Observable, BehaviorSubject } from 'rxjs';
import { BaseModelClassApi } from "../models/class/class.model";

@Injectable({
  providedIn: 'root'
})
export class DataCartService implements BaseModelClassApi {

  private apiUrl = 'http://localhost:5000/api/v1/cart'
  private myCart = new BehaviorSubject<ModeloCart[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor(private http: HttpClient) { }


  get(): Observable<ModeloCart[]> {
    return this.http.get<ModeloCart[]>(this.apiUrl)
  }

  post<T>(producto: T): Observable<string> {
    return this.http.post<string>(this.apiUrl, producto)
  }

  delete<T>(id: T): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`)
  }


}
