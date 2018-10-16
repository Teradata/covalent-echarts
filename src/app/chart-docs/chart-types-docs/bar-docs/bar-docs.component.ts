import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITdSplitLine, TdYAxisPosition, ITdSeriesTooltip, ITdAxisLine, ITdAxisLabel } from '@covalent/echarts/base';
import { ITdBarConfig, ITdBarSeries } from '@covalent/echarts/bar';
import { seriesToolTip, barConfig, barPlot, splitLineBar, xLine, yLine, yAxisLabel } from './bar-example-data';

@Component({
  selector: 'app-bar-docs',
  templateUrl: './bar-docs.component.html',
  styleUrls: ['./bar-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class BarDocsComponent {

  seriesToolTip: ITdSeriesTooltip[] = seriesToolTip;
  barConfig: ITdBarConfig = barConfig;
  barPlot: ITdBarSeries[]  = barPlot;
  splitLineBar: ITdSplitLine = splitLineBar;
  xLine: ITdAxisLine = xLine;
  yLine: ITdAxisLine = yLine;
  yAxisLabel: ITdAxisLabel = yAxisLabel;
  
  barYaxisPosition: TdYAxisPosition = TdYAxisPosition.Right;

  constructor() {}

  markClicked(event: any): void {
    console.log(event);
  }

}
