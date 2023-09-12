import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [EncabezadoComponent, TabsComponent],
  exports:[EncabezadoComponent, TabsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
