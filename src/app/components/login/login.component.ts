import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ServiceReqresService } from '../../service/service-reqres.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ServiceReqresService, private router:Router) { }

  ngOnInit() {
    this.CrearFormulario();
  }

  public login: FormGroup;

  public CrearFormulario(){
    this.login=new  FormGroup({
      email: new FormControl(null,[Validators.required,Validators.pattern( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl(null, Validators.required)
    })
  }
 
  public Login(){
    console.log(this.login);
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })

    this.service.Loginn(this.login.value).subscribe(
      (data:any)=>{
        console.log(data);
        localStorage.setItem('token', data.token)
        this.router.navigate(['/home'])

      },error => {
        Toast.fire({
          icon: 'error',
          title: 'Datos incorrectos'
        })
       this.login.reset();
      }
    )

  }
}
