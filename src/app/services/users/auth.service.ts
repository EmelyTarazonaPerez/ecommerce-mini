import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/models/user.modelo';
import { Auth } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'https://api.escuelajs.co/api/v1/auth/login'
  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post<Auth>(this.api, user)
  }

  profile(token:string){
    return console.log('aqui va la ruta pa carrito')
  }
}
