import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Necesario para la navegación

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage {

  constructor(private router: Router) {}

  // Función para cerrar sesión (aún no implementada, solo ejemplo)
  logout() {
    // Aquí iría tu lógica de cerrar sesión, por ejemplo, eliminando el token o limpiando el estado
    console.log('Cerrar sesión');
    // Después de cerrar sesión, redirige a la página de inicio de sesión
    this.router.navigate(['/login']); // Cambia esto si tienes una página de inicio diferente
  }
}
