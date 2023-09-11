import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoRealizadoPageRoutingModule } from './pago-realizado-routing.module';

import { PagoRealizadoPage } from './pago-realizado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoRealizadoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PagoRealizadoPage]
})
export class PagoRealizadoPageModule {}
