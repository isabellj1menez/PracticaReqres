import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { RegistoComponent } from './components/registo/registo.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistoComponent },
  { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const appRouting = RouterModule.forRoot(routes);