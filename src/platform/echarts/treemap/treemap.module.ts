import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts/lib/chart/treemap';

import { TdChartSeriesTreeMapComponent } from './treemap.component';

export const TREEMAP_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesTreeMapComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TREEMAP_MODULE_COMPONENTS,
  ],
  exports: [
    TREEMAP_MODULE_COMPONENTS,
  ],
})
export class CovalentTreeMapEchartsModule {

}
