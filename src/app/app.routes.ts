import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NombreComponent } from './nombre/nombre.component';

export const routes: Routes = [{
    path:'',
    component: MenuComponent

},
{
    path:'aboutme',
    component: AboutmeComponent
},
{
    path:'nombre',
    component: NombreComponent
}];
