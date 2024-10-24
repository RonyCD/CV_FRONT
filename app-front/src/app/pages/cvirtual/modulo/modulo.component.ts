import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modulo } from '../../../core/model/modulo/modulo.model';
import { ModuloService } from '../../../core/service/modulo.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent {

  cardsData: { nombreModulo: string; descModulo: string }[] = [];
  idCartaVirtual: number | null = null;

  constructor(
    private moduloService: ModuloService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getModulosData();
    this.retrieveIdCartaVirtual();
  }

  getModulosData(): void {
    this.moduloService.getModulos().subscribe(
      response => {
        if (response.success) {
          this.cardsData = response.data.map((modulo: Modulo) => ({
            nombreModulo: modulo.nombreModulo,
            descModulo: modulo.descripcion
          }));
        } else {
          console.error('Error en la respuesta de la API:', response.message);
        }
      },
      error => {
        console.error('Error en la solicitud HTTP:', error);
      }
    );
  }

  retrieveIdCartaVirtual(): void {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      this.idCartaVirtual = parsedData.idCartaVirtual;
    }
  }

  onCardClick(nombreModulo: string): void {
    if (nombreModulo === 'Carta Virtual') {
      this.router.navigate(['/home/categoria', this.idCartaVirtual]);
    }
    //OTROS METODOS
  }
}
