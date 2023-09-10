import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viaje-conductor',
  templateUrl: './viaje-conductor.page.html',
  styleUrls: ['./viaje-conductor.page.scss'],
})
export class ViajeConductorPage implements OnInit {

  constructor() { }

  destino: string = "";
  mostrarimagen: boolean = false;

  ngOnInit() {
  }

  Mostrarimagen() {
    if (this.destino && this.destino.trim() !== '') {
      this.mostrarimagen = true;
    } else {
      this.mostrarimagen = false;
    }
  }
}
