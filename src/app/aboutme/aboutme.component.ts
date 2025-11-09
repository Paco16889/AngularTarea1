import { Component} from '@angular/core';
import { ServicdService } from '../core/services/servicd.service';


@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

  constructor(private servicio: ServicdService){}

  goBack(){
    this.servicio.onBack();
  }
  
}
