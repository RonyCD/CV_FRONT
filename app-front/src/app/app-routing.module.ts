import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ModuloComponent } from './pages/cvirtual/modulo/modulo.component';
import { CategoriaComponent } from './pages/cvirtual/categoria/categoria.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: 'modulo',
        component: ModuloComponent
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
