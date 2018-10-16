import { Routes, RouterModule } from '@angular/router';
import { DocsAppComponent } from './app.component';

const routes: Routes = [{
  component: DocsAppComponent, path: '',
  children: [
    {
      path: 'chart-types', data: { preload: false, }, loadChildren: './chart-docs/chart-docs.module#ChartDocsModule',
    },
  ],
  },
  {
    path: '**', redirectTo: '/',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});
