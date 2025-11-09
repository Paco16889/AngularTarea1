import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServicdService } from '../core/services/servicd.service';

@Component({
  selector: 'app-nombre',
  imports: [],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.scss'
})
export class NombreComponent {


   constructor(private servicio: ServicdService){}
  goBack(){
    this.servicio.onBack();
  }
}
