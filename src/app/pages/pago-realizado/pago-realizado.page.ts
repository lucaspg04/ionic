import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-realizado',
  templateUrl: './pago-realizado.page.html',
  styleUrls: ['./pago-realizado.page.scss'],
})
export class PagoRealizadoPage implements OnInit {

  constructor(
    private router:Router) { }

  ngOnInit() {
  }

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }

}
