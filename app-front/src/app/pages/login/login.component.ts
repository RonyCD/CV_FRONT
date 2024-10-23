import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router
  )
  { }

  onLogin() {
    if (this.username && this.password) {
      this.router.navigate(['/home']);

    } else {
      console.log('Por favor, completa todos los campos');
    }
  }

}
