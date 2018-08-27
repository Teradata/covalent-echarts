import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '../base';

import { TdLineChartComponent } from './line.component';

export const MODULE_COMPONENTS: Type<any>[] = [
  TdLineChartComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CovalentBaseEchartsModule,
  ],
  declarations: [
    MODULE_COMPONENTS,
  ],
  exports: [
    MODULE_COMPONENTS,
  ],
})
export class CovalentLineEchartsModule {

}
