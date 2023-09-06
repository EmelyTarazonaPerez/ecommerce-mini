import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth } from "../models/auth.model";
import { switchMap, tap, throwError } from "rxjs";
import { getOrdersByUser } from "../models/product/cart.modelo";
import { ServiceToken } from "./token.service"
import { checkAuth } from "../interceptor/token.interceptor";


@Injectable({
  providedIn: 'root'
})

export class ServiceAuth {

  API_URL_USER = 'http://localhost:5000/api/v1/login'
  API_URL_ORDERS = 'http://localhost:5000/api/v1/profile/my-orders'

  constructor(
    private http: HttpClient,
    private tokenService: ServiceToken
  ) { }

  login(gmail: string, password: string) {
    return this.http.post<Auth>(this.API_URL_USER, {
      gmail,
      password
    })
      .pipe(
        tap(respose => this.tokenService.saveToken(respose.access_token))
      )
  }

  orders() {
    const params = new HttpParams();
    return this.http.get<getOrdersByUser>(this.API_URL_ORDERS, {
    params, context:checkAuth()})
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.orders()),
      )
  }

}
