import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) {}

  //Obtener usuario
  getUser(id: number): Observable<any>{
    return this.http.get(this.url+"/"+id);
  }

  //Crear usuario
  createUser(newUser: any){
    let data = JSON.stringify(newUser);
    return this.http.post(`${this.url}`, data);
  }

  updateUser(userId:number, dataUser: any){
    let data = JSON.stringify(dataUser);
    return this.http.put(this.url+"/"+userId, data);
  }
}
