import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.page.html',
  styleUrls: ['./solicitar-viaje.page.scss'],
})
export class SolicitarViajePage implements OnInit {

  constructor(
    private router:Router

  ) { }

  ngOnInit() {
  }

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }

}
