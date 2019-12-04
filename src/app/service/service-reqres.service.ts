import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceReqresService {

  constructor( private http: HttpClient) { }

  public Loginn(user) {
    let URL: string = 'https://reqres.in/api/login';
     console.log(user);
    return this.http.post(URL,user)
  }

  public RealizarRegistro(newuser) {
    let URL: string = 'https://reqres.in/api/register';
    //  console.log(newuser);
    return this.http.post(URL,newuser)
  }

  public ListaUsuarios(){
    let URL: string = 'https://reqres.in/api/users?per_page=12'

    return this.http.get(URL)
  }

}
