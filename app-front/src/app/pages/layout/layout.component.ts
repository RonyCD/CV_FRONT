import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  
  items: MenuItem[];
  home: MenuItem;

  containerClass: string = 'default-container';


  constructor() {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.items = [
      { label: 'Home', routerLink: '/home' },
      { label: 'Modulo', routerLink: '/home/modulo' },
    ];
  }


  toggleContainerClass() {
    this.containerClass = this.containerClass === 'default-container' ? 'alternate-container' : 'default-container';
  }

}
