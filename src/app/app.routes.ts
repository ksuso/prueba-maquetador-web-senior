import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WeComponent } from './pages/we/we.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Prueba técnica maquetador senior w2m"
  },
  {
    path: 'nosotros',
    component: WeComponent,
    title: "Nosotros"
  },
  {
    path: 'viajes',
    component: TravelsComponent,
    title: "Viajes"
  },
  {
    path: 'contacto',
    component: ContactComponent,
    title: "Contacto"
  }
];
