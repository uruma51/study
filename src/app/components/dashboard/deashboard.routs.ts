import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';

export const dashboardRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'category',
    loadComponent: () =>
      import('./category/category.component').then((_) => _.CategoryComponent),
    children: [
      {
        path: 'sub-category',
        component: SubCategoryComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
