import { Component, inject } from '@angular/core';
import { ServicdService } from '../core/services/servicd.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-nombre',
  imports: [ FormsModule ],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.scss'
})
export class NombreComponent {

  name = '';
  finalName = '';
  textoMostrado = false;

  
  onEnter() {
    if (this.name !== '') {
      this.finalName = this.name;
      this.textoMostrado = true;
    }else{
      this.textoMostrado = false;
    }
}

 goRefresh() {
  this.textoMostrado = false;
  this.name = '';
}

   constructor(private servicio: ServicdService){}
  goBack(){
    this.servicio.onBack();
  }
}
