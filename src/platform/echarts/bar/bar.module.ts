import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '../base';

import { TdBarChartComponent } from './bar.component';

export const MODULE_COMPONENTS: Type<any>[] = [
  TdBarChartComponent,
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
export class CovalentBarEchartsModule {

}
