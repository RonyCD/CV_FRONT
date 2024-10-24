
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaResponse } from '../model/categoria/CategoriaResponse';

@Injectable({
    providedIn: 'root'
  })
  export class CategoriaService {
  
    private apiUrl = 'https://localhost:7030/api/v1/categoria/categoria';
  
    constructor(private http: HttpClient) { }
  
    getCategorias(idCartaVirtual: number): Observable<CategoriaResponse> {
        const params = new HttpParams().set('_IdCartaVirtual', idCartaVirtual.toString());
        return this.http.get<CategoriaResponse>(`${this.apiUrl}/obtener-idcvirtual`, { params });
    }
    
  }