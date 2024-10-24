import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../../core/model/usuario/LoginResponse';
import { UsuarioService } from '../../core/service/usuario.service';
import { Usuario } from '../../core/model/usuario/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  onLogin() {
    if (this.username && this.password) {

      this.usuarioService.login(this.username, this.password).subscribe(

        (response: LoginResponse) => {

          if (response.success) {

            localStorage.setItem('jwtToken', response.data?.jwtToken.token ?? '');

            const userData = {
              idUsuario: response.data?.idUsuario ?? '',
              idCartaVirtual: response.data?.idCartaVirtual ?? '',
              nombres: response.data?.nombres ?? '',
              correo: response.data?.correo ?? '',
              idRol: response.data?.idRol ?? [], // si hay roles
            };

            localStorage.setItem('userData', JSON.stringify(userData));

            this.router.navigate(['/home']);

          } else {
            console.log('Error en el login: ', response.message);
          }
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
    } else {
      console.log('Por favor, completa todos los campos');
    }
  }
}
