import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class ServiceLogin {

   private URL_USER = 'http://localhost:5000/api/v1/users'

   constructor(private http : HttpClient){
   }

   createUser(dto: User) {
      return this.http.post<User>(this.URL_USER, dto )
   }

   private getAll(){
    return this.http.get<User[]>(this.URL_USER)
   }

}

