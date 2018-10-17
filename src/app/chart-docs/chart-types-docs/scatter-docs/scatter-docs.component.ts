import { Component, ChangeDetectionStrategy } from '@angular/core';
import { configScatterOption } from './scatter-example-data';
import { splitLineBar, xLine, yLine } from '../bar-docs/bar-example-data';
import { ITdScatterConfig } from '@covalent/echarts/scatter';
import { ITdSplitLine, ITdAxisLine } from '@covalent/echarts/base';

@Component({
  selector: 'app-scatter-docs',
  templateUrl: './scatter-docs.component.html',
  styleUrls: ['./scatter-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces:  true,
})
export class ScatterDocsComponent {

  /** 
   * This component is intentionally left simple for brevity as the data is 
   * typically normally requested via an API which would include Angular 
   * life-cycle hooks and other considerations.
   * 
   * Data is found in line-example-data.ts adjacent to this component.
   */

  splitLineBar: ITdSplitLine = splitLineBar;
  xLine: ITdAxisLine = xLine;
  yLine: ITdAxisLine = yLine;
  configScatter: ITdScatterConfig = configScatterOption;

}
