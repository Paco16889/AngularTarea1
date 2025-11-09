import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nombre',
  imports: [],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.scss'
})
export class NombreComponent {


   private router:Router = inject(Router);
  onBack(){
    this.router.navigate(['/']);
  }
}
