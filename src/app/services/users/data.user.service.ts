import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { UserDTO, User } from "src/app/models/user.modelo";

@Injectable({
  providedIn: 'root'
})

export class SeviceUsers {

  private api = 'https://api.escuelajs.co/api/v1/users'
  constructor(private http: HttpClient) { }

  create (dto:UserDTO){
    return this.http.post<User>(this.api,dto)
  }

  getAll (){
    return this.http.get<User[]>(this.api)
  }

}
