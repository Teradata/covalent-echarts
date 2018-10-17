import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartComponent } from './chart.component';
import { TdChartTooltipComponent, TdChartTooltipFormatterDirective } from './tooltip/tooltip.component';
import { TdSeriesTooltipComponent, TdChartSeriesTooltipFormatterDirective } from './tooltip/series-tooltip.component';
import { ChartRenderDirective } from './directives/chart-render.directive';
import { TdChartXAxisComponent } from './axis/x-axis.component';
import { TdChartYAxisComponent } from './axis/y-axis.component';

export const BASE_MODULE_COMPONENTS: Type<any>[] = [
  TdChartComponent,
  TdChartTooltipComponent,
  TdChartTooltipFormatterDirective,
  TdChartXAxisComponent,
  TdChartYAxisComponent,
  TdSeriesTooltipComponent,
  TdChartSeriesTooltipFormatterDirective,
  ChartRenderDirective,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BASE_MODULE_COMPONENTS,
  ],
  exports: [
    BASE_MODULE_COMPONENTS,
  ],
})
export class CovalentBaseEchartsModule {

}
