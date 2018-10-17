import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { comboPlot, comboConfig } from './combination-example-data';
import { barPlot } from '../bar-docs/bar-example-data';
import { linePlot } from '../line-docs/line-example-data';
import { ITdBarSeries } from '@covalent/echarts/bar';
import { ITdLineSeries } from '@covalent/echarts/line';

@Component({
  selector: 'app-combination-docs',
  templateUrl: './combination-docs.component.html',
  styleUrls: ['./combination-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class CombinationDocsComponent {

  /** 
   * This component is intentionally left simple for brevity as the data is 
   * typically normally requested via an API which would include Angular 
   * life-cycle hooks and other considerations.
   * 
   * Data is found in combination-example-data.ts adjacent to this component.
   */
  
  linePlot: ITdLineSeries[] = linePlot;
  barPlot: ITdBarSeries[];
  comboPlot: ITdBarSeries[] = comboPlot;
  comboConfig: any = comboConfig;

}
