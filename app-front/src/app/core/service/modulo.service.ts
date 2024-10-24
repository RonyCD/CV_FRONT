import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modulo } from '../model/modulo/modulo.model';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  private apiUrl = 'https://localhost:7030/api/v1/modulo/listar';

  constructor(private http: HttpClient) { }

  getModulos(): Observable<{ success: boolean; data: Modulo[]; message?: string }> {
    return this.http.get<{ success: boolean; data: Modulo[]; message?: string }>(this.apiUrl);
  }
  
}
