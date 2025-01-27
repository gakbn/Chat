import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
  standalone: false, // Aquí está marcado como standalone

})
export class PopoverMenuComponent {

  constructor() { }

  // Métodos para manejar las opciones seleccionadas
  newGroup() {
    console.log('Nuevo Grupo seleccionado');
  }

  newBroadcast() {
    console.log('Nueva Difusión seleccionada');
  }

  linkedDevices() {
    console.log('Dispositivos Vinculados seleccionados');
  }

  starredMessages() {
    console.log('Mensajes Destacados seleccionados');
  }

  settings() {
    console.log('Ajustes seleccionados');
  }
}
