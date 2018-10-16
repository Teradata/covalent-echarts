import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentMenuModule } from '@covalent/core/menu';
import { CovalentHighlightModule } from '@covalent/highlight';

import {
  ChartTypesDocsComponent,
  TreeDocsComponent,
  BarDocsComponent,
  LineDocsComponent,
  ScatterDocsComponent,
} from './';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentScatterEchartsModule } from '@covalent/echarts/scatter';

import { chartTypesRoutes } from './chart-docs.routes';
import { ChartTypesMainComponent } from './chart-types-docs/chart-types-main/chart-types-main.component';

@NgModule({
  imports: [
    CommonModule,
    // Material
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    // Covalent Core
    CovalentLayoutModule,
    CovalentCommonModule,
    CovalentLoadingModule,
    CovalentMediaModule,
    CovalentMenuModule,
    CovalentHighlightModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
    CovalentBarEchartsModule,
    CovalentScatterEchartsModule,
    chartTypesRoutes],
  declarations: [
    ChartTypesDocsComponent,
    TreeDocsComponent,
    BarDocsComponent,
    LineDocsComponent,
    ScatterDocsComponent,
    ChartTypesMainComponent,
  ],
})
export class ChartDocsModule {}
