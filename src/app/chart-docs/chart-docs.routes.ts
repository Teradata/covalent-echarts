import { Routes, RouterModule } from '@angular/router';

import {
  ChartTypesMainComponent,
  ChartTypesDocsComponent,
  TreeDocsComponent,
  BarDocsComponent,
  LineDocsComponent,
  ScatterDocsComponent,
} from './';

const routes: Routes = [
  {
    component: ChartTypesDocsComponent,
    path: '',
    children: [
      {
        component: ChartTypesMainComponent,
        path: '',
      },
      {
        component: BarDocsComponent,
        path: 'bar',
      },
      {
        component: LineDocsComponent,
        path: 'line',
      },
      {
        component: ScatterDocsComponent,
        path: 'scatter',
      },
      {
        component: TreeDocsComponent,
        path: 'tree',
      },
    ],
  },
];

export const chartTypesRoutes: any = RouterModule.forChild(routes);
