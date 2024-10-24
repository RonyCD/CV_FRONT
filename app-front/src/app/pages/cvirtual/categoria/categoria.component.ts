import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CategoriaService } from '../../../core/service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: SelectItem[] = [];
  selectedCategoria: SelectItem | null = null;
  idCartaVirtual: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idCartaVirtual = +params.get('id')!;
      console.log('ID Carta Virtual:', this.idCartaVirtual);
      this.loadCategorias();
    });
  }

  loadCategorias(): void {
    if (this.idCartaVirtual) {
      this.categoriaService.getCategorias(this.idCartaVirtual).subscribe(
        response => {
          if (response.success) {
            this.categorias = response.data.map(categoria => ({
              label: categoria.nombreCategoria,
              value: categoria
            }));
          } else {
            console.error('Error al cargar las categorías:', response.message);
          }
        },
        error => {
          console.error('Error en la solicitud HTTP:', error);
        }
      );
    } else {
      console.error('ID Carta Virtual no válido');
    }
  }

  createCategory(): void {
    console.log('Crear nueva categoría');
  }
}
