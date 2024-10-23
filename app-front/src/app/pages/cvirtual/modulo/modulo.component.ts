import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrl: './modulo.component.css'
})
export class ModuloComponent {

  cardsData = [
    {
      header: 'Card 1',
      content: 'Contenido de la tarjeta 1'
    },
    {
      header: 'Card 2',
      content: 'Contenido de la tarjeta 2'
    },
    {
      header: 'Card 3',
      content: 'Contenido de la tarjeta 3'
    }
    
  ];

}
