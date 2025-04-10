
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/deashboard.routs').then(
        m => m.dashboardRoutes // Fix typo: ensure correct export name
      ),
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./components/signals/signal/signal.component').then(
        m => m.SignalComponent // Fix typo: ensure correct export name
      ),
  },

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  
];
