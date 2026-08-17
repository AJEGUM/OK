import { Routes } from '@angular/router';

export const routes: Routes = [
  // Si entran a la raíz (localhost:4200/), carga el inicio
  { 
    path: '', 
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio) 
  },

  // Opcional: Redirigir cualquier ruta desconocida al inicio
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];