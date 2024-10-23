import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { ModuloComponent } from './modulo/modulo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PrimengModule } from '../../core/prime/primeng.module';

@NgModule({
  declarations: [   

  
    ModuloComponent, CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
  ],
  providers: []
})
export class CvirtualModule { }
