import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component'; // Asegúrate de importar el componente popover
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PopoverMenuComponent], // Agregar el componente popover aquí
  
})
export class HomePageModule {}
