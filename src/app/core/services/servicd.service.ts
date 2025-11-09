import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServicdService {
  private router:Router = inject(Router);
  constructor() { }

  onBack(){
    this.router.navigate(['/']);
  }
}
