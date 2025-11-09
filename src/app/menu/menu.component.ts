import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private router:Router = inject(Router);

  toNombre(){
    this.router.navigate(['/nombre']);
  }

  toAboutMe(){
    this.router.navigate(['/aboutme'])
  }
}
