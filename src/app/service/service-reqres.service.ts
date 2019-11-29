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

}
