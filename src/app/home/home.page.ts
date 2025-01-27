import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component'; // Importa el componente que creaste

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,

})
export class HomePage {

  constructor(private popoverController: PopoverController) {}

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,  // Especificamos el componente popover que creamos
      event: event,  // Para posicionarlo donde se hizo clic
      translucent: true
    });
    return await popover.present();
  }
}
