import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from './pages/layout/parts/topbar/topbar.component';
import { Sidebar } from 'primeng/sidebar';
import { SidebarComponent } from './pages/layout/parts/sidebar/sidebar.component';
import { CvirtualModule } from './pages/cvirtual/cvirtual.module';
import { PrimengModule } from './core/prime/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    TopbarComponent,
    SidebarComponent,
    CvirtualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
