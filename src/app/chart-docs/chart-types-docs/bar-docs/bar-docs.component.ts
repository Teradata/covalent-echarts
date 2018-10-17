import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { ITdSplitLine, TdYAxisPosition, ITdSeriesTooltip, ITdAxisLine, ITdAxisLabel, ITdCharMarkEvent } from '@covalent/echarts/base';
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

  /** 
   * This component is intentionally left simple for brevity as the data is 
   * typically normally requested via an API which would include Angular 
   * life-cycle hooks and other considerations.
   * 
   * Data is found in bar-example-data.ts adjacent to this component.
   */

  seriesToolTip: ITdSeriesTooltip[] = seriesToolTip;
  barConfig: ITdBarConfig = barConfig;
  barPlot: ITdBarSeries[]  = barPlot;
  splitLineBar: ITdSplitLine = splitLineBar;
  xLine: ITdAxisLine = xLine;
  yLine: ITdAxisLine = yLine;
  yAxisLabel: ITdAxisLabel = yAxisLabel;
  
  barYaxisPosition: TdYAxisPosition = TdYAxisPosition.Right;

  message: ITdCharMarkEvent;
  height: number = 300;
  rerender: boolean = false;

  markClicked(event: ITdCharMarkEvent): void {
    this.message = event;
    this.toggleChartRenderDirective();
    this.height = 600;

  }

  clearMarkData(): void {
    this.toggleChartRenderDirective();
    this.height = 300;
    this.message = undefined;
  }

  toggleChartRenderDirective(): void {
    this.rerender = !this.rerender;
  }
}
