import { Component } from '@angular/core';

import { ServicdService } from '../core/services/servicd.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  

  constructor(private service: ServicdService){}


goTo(componentName:string){
  this.service.toComponent(componentName);
}
}
