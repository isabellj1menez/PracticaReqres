import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { appRouting } from './app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    appRouting

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
