import { Routes, RouterModule } from '@angular/router';

import { AtomicTooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  {
    component: AtomicTooltipComponent,
    path: 'tooltip',
  },
  {
    component: AtomicTooltipComponent,
    path: 'axis',
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);
