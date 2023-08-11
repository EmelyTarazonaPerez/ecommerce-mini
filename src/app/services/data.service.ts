import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/products.model";
import { User } from "../models/user.modelo";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/api/v1/products')
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5000/api/v1/users')
  }

}
