import { Routes } from '@angular/router';

export const routes: Routes = []= [
    {
      path: 'features',
      loadComponent: () => import('./pages/features/features.component').then(c => c.FeaturesComponent)
    },
    {
        path: 'companies',
        loadComponent: () => import('./pages/companies/companies.component').then(c => c.CompaniesComponent)
      },
      {
        path: 'requests',
        loadComponent: () => import('./pages/requests/requests.component').then(c => c.RequestsComponent)
      },
      {
        path: 'audit',
        loadComponent: () => import('./pages/audit/audit.component').then(c => c.AuditComponent)
      },
    {
      path: '',
    //   pathMatch:'full', 
      loadComponent: () => import('./pages/features/features.component').then(c => c.FeaturesComponent)
    },
    // {
    //   path: '**',
    //   loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
    // }
];