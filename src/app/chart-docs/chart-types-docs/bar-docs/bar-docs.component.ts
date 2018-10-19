import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, } from '@angular/core';
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
   * 
   * CHANGE DECTECTION WORKAROUND:
   * height is used as to trigger change detection which updates
   * the chart, in this case the chart width needs to change. setTimeout in the
   * clearMarkData() method cause Angular to wait for a tick in the change dectection
   * life cycle before running change dectection again. This is due to the distinctUntilChange()
   * operator being used when setting the height and width in 
   * src/platform/echarts/base/chart.component.ts
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

  constructor(private _changeDetectionRef: ChangeDetectorRef) {}

  markClicked(event: ITdCharMarkEvent): void {
    this.message = event;
    this.height = 600;
    this._changeDetectionRef.detectChanges();
  }

  clearMarkData(): void {
    this.height = 300;
    this.message = undefined;
    setTimeout(() => {
      this._changeDetectionRef.detectChanges();
    });
  }
}
