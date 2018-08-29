import { Component, OnInit, OnChanges, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { TdChartOptionsService } from '../base.service';
import { assignDefined } from '../utils';

@Component({
  selector: 'td-series',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdSeriesComponent implements OnInit, OnChanges, OnDestroy {
  private _state: any = {};
  private _seriesOption: string = 'series';

  @Input('config')
  config: any = {};

  @Input('id')
  id: string;
  @Input('type')
  type: string = 'line';
  @Input('name')
  name: string;
  @Input('coordinateSystem')
  coordinateSystem: 'cartesian2d' | 'polar';
  @Input('xAxisIndex')
  xAxisIndex: number;
  @Input('yAxisIndex')
  yAxisIndex: number;
  @Input('polarIndex')
  polarIndex: number;
  @Input('symbol')
  symbol:
    | 'circle'
    | 'rect'
    | 'roundRect'
    | 'triangle'
    | 'diamond'
    | 'pin'
    | 'arrow'
    | 'none'
    | string;
  @Input('symbolSize') symbolSize: number;
  @Input('symbolRotate') symbolRotate: number;
  @Input('symbolKeepAspect') symbolKeepAspect: boolean;
  @Input('symbolOffset') symbolOffset: any[];
  @Input('showSymbol') showSymbol: boolean;
  @Input('showAllSymbol ') showAllSymbol: boolean;
  @Input('hoverAnimation') hoverAnimation: boolean;
  @Input('stack') stack: string;
  @Input('cursor') cursor: string;
  @Input('connectNulls') connectNulls: boolean;
  @Input('clipOverflow') clipOverflow: boolean;
  @Input('step') step: boolean | 'start' | 'middle' | 'end';
  @Input('label') label: object;
  @Input('itemStyle') itemStyle: object;
  @Input('lineStyle') lineStyle: object;
  @Input('areaStyle ') areaStyle: object;
  @Input('emphasis ') emphasis: object;
  @Input('smooth ') smooth: boolean | number;
  @Input('smoothMonotone ') smoothMonotone: string;
  @Input('sampling ') sampling: string;
  @Input('dimensions ') dimensions: any[];
  @Input('encode') encode: object;
  @Input('seriesLayoutBy') seriesLayoutBy: 'row' | 'column';
  @Input('datasetIndex') datasetIndex: number;
  @Input('data') data: any[];
  @Input('markPoint') markPoint: object;
  @Input('markLine') markLine: object;
  @Input('markArea') markArea: object;
  @Input('zlevel') zlevel: number;
  @Input('z') z: number;
  @Input('silent') silent: boolean;
  @Input('animation') animation: boolean;
  @Input('animationThreshold') animationThreshold: number;
  @Input('animationDuration') animationDuration: any;
  @Input('animationEasing') animationEasing: string;
  @Input('animationDelay') animationDelay: any;
  @Input('animationDurationUpdate') animationDurationUpdate: any;
  @Input('animationEasingUpdate') animationEasingUpdate: any;
  @Input('animationDelayUpdate') animationDelayUpdate: any;
  @Input('tooltip') tooltip: any;

  constructor(private _optionsService: TdChartOptionsService) {
  }

  ngOnInit(): void {

    this._setOptions();
  }

  ngOnChanges(): void {
    this._setOptions();
  }

  ngOnDestroy(): void {
    this._removeOption();
  }

  private _setOptions(): void {
    // console.log(this.data, this.type);
    let config: any = assignDefined(this._state, this.config, {
      id: this.id,
      type: this.type,
      name: this.name,
      coordinateSystem: this.coordinateSystem,
      xAxisIndex: this.xAxisIndex,
      yAxisIndex: this.yAxisIndex,
      polarIndex: this.polarIndex,
      symbol: this.symbol,
      symbolSize: this.symbolSize,
      symbolRotate: this.symbolRotate,
      symbolKeepAspect: this.symbolKeepAspect,
      symbolOffset: this.symbolOffset,
      showSymbol: this.showSymbol,
      showAllSymbol: this.showAllSymbol,
      hoverAnimation: this.hoverAnimation,
      stack: this.stack,
      cursor: this.cursor,
      connectNulls: this.connectNulls,
      clipOverflow: this.clipOverflow,
      step: this.step,
      label: this.label,
      itemStyle: this.itemStyle,
      lineStyle: this.lineStyle,
      areaStyle: this.areaStyle,
      emphasis: this.emphasis,
      smooth: this.smooth,
      smoothMonotone: this.smoothMonotone,
      sampling: this.sampling,
      dimensions: this.dimensions,
      encode: this.encode,
      seriesLayoutBy: this.seriesLayoutBy,
      datasetIndex: this.datasetIndex,
      data: this.data,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
      silent: this.silent,
      animation: this.animation,
      animationThreshold: this.animationThreshold,
      animationDuration: this.animationDuration,
      animationEasing: this.animationEasing,
      animationDelay: this.animationDelay,
      animationDurationUpdate: this.animationDurationUpdate,
      animationEasingUpdate: this.animationEasingUpdate,
      animationDelayUpdate: this.animationDelayUpdate,
      tooltip: this.tooltip,
    });
    this._optionsService.setArrayOption(this._seriesOption, config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption(this._seriesOption);
  }
}
