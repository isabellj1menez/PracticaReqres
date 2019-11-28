import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.CrearFormulario();
  }

  public login: FormGroup;

  public CrearFormulario(){

    this.login=new  FormGroup({
      email: new FormControl(null,[Validators.required,Validators.pattern( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      password: new FormControl(null, Validators.required)
    })
  }
 
  public Login(){
    console.log(this.login)
  }
}
