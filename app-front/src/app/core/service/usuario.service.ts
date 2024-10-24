import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../model/usuario/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://localhost:7030/api/v1/usuario/iniciar-sesion';

  constructor(private http: HttpClient) { }

  login(username: string, contrasenia: string): Observable<LoginResponse> {
    const body = { username, contrasenia };
    return this.http.post<LoginResponse>(this.apiUrl, body);
  }
  
}
