import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ServiceToken {

   constructor(private http : HttpClient){
   }

  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    const token = localStorage.getItem('token')
    return token;
  }
}

