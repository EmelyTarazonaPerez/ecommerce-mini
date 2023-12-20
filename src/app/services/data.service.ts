import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Product } from "../../app/models/product/products.model";
import { User } from "../models/user.model";
import { catchError } from "rxjs/operators"
import { BaseModelClassApi } from "../models/class/class.model";

@Injectable({
  providedIn: 'root'
})

export class DataService implements BaseModelClassApi {

  private apiUrl = 'http://localhost:5000/api/v1/products'
  constructor(private http: HttpClient) { }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  findOne(id: number | string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Conflict) {
            return throwError('Algo esta fallando en el servidor')
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('Product no found')
          }
          return throwError('Ups hubo un error')
        })
      )
  }
}
