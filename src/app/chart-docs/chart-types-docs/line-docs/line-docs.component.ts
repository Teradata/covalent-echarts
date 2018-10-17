import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  TdXAxisPosition,
  ITdSeriesTooltip,
  ITdSplitLine,
  ITdAxisLine,
  ITdAxisLabel,
  TdMarkPointSymbol,
} from '@covalent/echarts/base';
import {
  linePlot,
  splitLine,
  seriesToolTip,
  lineConfig,
  yAxisLabel,
  xAxisLabel,
  yLine,
  xLine,
} from './line-example-data';
import { ITdLineConfig, ITdLineSeries } from '@covalent/echarts/line';

@Component({
  selector: 'app-line-docs',
  templateUrl: './line-docs.component.html',
  styleUrls: ['./line-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class LineDocsComponent {

  /** 
   * This component is intentionally left simple for brevity as the data is 
   * typically normally requested via an API which would include Angular 
   * life-cycle hooks and other considerations.
   * 
   * Data is found in line-example-data.ts adjacent to this component.
   */

  showTooltip: boolean = true;

  seriesToolTip: ITdSeriesTooltip[] = seriesToolTip;
  lineConfig: ITdLineConfig = lineConfig;
  linePlot: ITdLineSeries[] = linePlot;
  splitLine: ITdSplitLine = splitLine;
  xLine: ITdAxisLine = xLine;
  yLine: ITdAxisLine = yLine;
  yAxisLabel: ITdAxisLabel = yAxisLabel;
  xAxisLabel: ITdAxisLabel = xAxisLabel;
  roundRectMarkPointSymbol: TdMarkPointSymbol = TdMarkPointSymbol.RoundRect;
  lineXAxisPosition: TdXAxisPosition = TdXAxisPosition.Top;
  lineXAxisPositionNoSeries: TdXAxisPosition = TdXAxisPosition.Bottom;
}
