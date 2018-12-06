import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts/lib/component/toolbox';

import { TdChartToolboxComponent, TdChartToolboxFormatterDirective } from './toolbox.component';

export const TOOLBOX_MODULE_COMPONENTS: Type<any>[] = [
  TdChartToolboxComponent,
  TdChartToolboxFormatterDirective,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TOOLBOX_MODULE_COMPONENTS,
  ],
  exports: [
    TOOLBOX_MODULE_COMPONENTS,
  ],
})
export class CovalentToolboxEchartsModule { }
