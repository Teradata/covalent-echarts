import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdDatasetComponent } from './dataset.component';

export const DATASET_MODULE_COMPONENTS: Type<any>[] = [
  TdDatasetComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DATASET_MODULE_COMPONENTS,
  ],
  exports: [
    DATASET_MODULE_COMPONENTS,
  ],
})
export class CovalentDatasetEchartsModule {

}
