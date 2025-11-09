import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

  private router:Router = inject(Router);
  onBack(){
    this.router.navigate(['/']);
  }
}
