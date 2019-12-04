import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceReqresService } from '../../service/service-reqres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styles: []
})
export class RegistoComponent implements OnInit {

  public registroformulario: FormGroup;
  public newuser ={email:"",
                   password:""};
  constructor(private service:ServiceReqresService) { }

  ngOnInit() {
    this.crearregistro();
  }

  public crearregistro():void{
    this.registroformulario = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.pattern( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl(null, [Validators.minLength(8), Validators.required]),
      password1: new FormControl(null,[Validators.required])
    })
    // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    this.registroformulario.controls.password1.setValidators(this.MatchPassword.bind(this))
  }

  private MatchPassword(control:FormControl):{[key:string]:boolean}{

    if(control.value!==this.registroformulario['controls']['password'].value)
    return {noigual:true} 
    return null
}


  public RealizarRegistro(newuser){

    this.newuser.email =this.registroformulario.value.email
    this.newuser.password =this.registroformulario.value.password
    console.log(this.registroformulario)
    console.log(this.newuser);
    
    this.service.RealizarRegistro(this.newuser).subscribe(
      (data)=>{console.log(data);
             
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  
}
