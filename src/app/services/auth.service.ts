import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth } from "../models/auth.model";
import { switchMap, tap, } from "rxjs";
import { getOrdersByUser } from "../models/product/cart.modelo";
import { ServiceToken } from "./token.service"
import { checkAuth } from "../interceptor/token.interceptor";
import { User } from "../models/user.model";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServiceAuth {

  API_URL_USER = 'http://localhost:5000/api/v1'
  API_URL_ORDERS = 'http://localhost:5000/api/v1/profile/my-orders'


  myProfile = new BehaviorSubject<User | null>(null);
  $myProfile = this.myProfile.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: ServiceToken
  ) { }

  login(gmail: string, password: string) {
    return this.http.post<Auth>(`${this.API_URL_USER}/login`, {
      gmail,
      password
    }).pipe(tap(respose => this.tokenService.saveToken(respose.access_token)))
  }

  profile(): Observable<User>{
    const params = new HttpParams();
    return this.http.get<User>(`${this.API_URL_USER}/profile`, {
      params, context: checkAuth()
    }).pipe (tap (response => this.myProfile.next(response)))
  }

  orders() {
    const params = new HttpParams();
    return this.http.get<getOrdersByUser[]>(this.API_URL_ORDERS, {
      params, context: checkAuth()
    })
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.profile())
      )
  }



}
