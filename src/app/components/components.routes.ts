import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    component: ComponentsComponent,
    path: '',
    children: [
      {
        component: OverviewComponent,
        path: '',
      },
      {
        path: 'types',
        data: { preload: true },
        loadChildren: './types/types.module#TypesModule',
      },
    ],
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);
