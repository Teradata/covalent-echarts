import { Routes, RouterModule } from '@angular/router';
import { DocsAppComponent } from './app.component';

const routes: Routes = [
  {
    component: DocsAppComponent,
    path: '',
    children: [
      { path: '', redirectTo: 'types', pathMatch: 'full' },
      {
        path: 'types',
        data: { preload: true },
        loadChildren: './types/types.module#TypesFeature',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'types',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});
