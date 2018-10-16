import { Component, ChangeDetectorRef } from '@angular/core';
import {
  ITdAxisLine,
  ITdAxisLabel,
  ITdSplitLine,
  TdXAxisPosition,
  TdYAxisPosition,
  TdLineType,
  TdMarkPointSymbol,
  ITdLineStyle,
  ITdBarSeries,
  ITdLineSeries,
  TdFontStyle,
  TdFontWeight,
  TdSeriesType,
  TdLineLabelPosition,
  ITdLineConfig,
  ITdBarConfig,
  TdAxisType,
  TdToolTipTrigger,
  ITdScatterConfig,
} from '../platform/echarts';

import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/tooltip';

import { configScatterOption } from './data/scatter';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const NOW: Date = new Date();

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {
  configScatter: ITdScatterConfig = configScatterOption;

  comboPlot: ITdBarSeries[] = [
    {
      type: TdSeriesType.Bar,
      itemStyle: {
        opacity: 0.75,
        color: '#575757',
      },
      markPoint: {
        data: [{ name: 'Target', value: 130, xAxis: 1, yAxis: 130 }],
      },
      name: 'Yesterday',
      data: [150, 130, 150, 120, 150, 120],
    },
    {
      type: TdSeriesType.Line,
      markPoint: {
        data: [{ name: 'Target', value: 100, xAxis: 1, yAxis: 121 }],
        symbolRotate: 180,
        label: { offset: [0, 10] },
      },
      markLine: {
        data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }],
        lineStyle: { color: '#000', type: TdLineType.Dotted },
        symbol: 'circle',
      },
      itemStyle: {
        opacity: 0.75,
        color: '#00E5FF',
      },
      name: 'Today',
      data: [80, 122, 80, 120, 80, 120],
    },
  ];

  showTooltip: boolean = true;

  comboConfig: ITdBarConfig = {
    xAxis: [
      {
        data: [
          'Electronics',
          'Toys',
          'Grocery',
          'Appliances',
          'Automotive',
          'Sports',
        ],
      },
      {
        show: true,
        type: TdAxisType.Time,
        boundaryGap: false,
        axisLine: { show: false },
        splitLine: { show: false },
      },
    ],
    yAxis: [
      {
        show: true,
        type: TdAxisType.Value,
        axisLabel: { inside: false },
        min: 0,
        max: 300,
      },
      {
        show: true,
        type: TdAxisType.Value,
        axisLabel: { inside: false },
        splitLine: { lineStyle: { type: TdLineType.Dotted } },
        position: TdYAxisPosition.Right,
        min: 0,
        max: 100,
      },
    ],
    series: this.comboPlot,
    tooltip: {
      show: true,
      trigger: TdToolTipTrigger.Item,
      showContent: true,
    },
  };

  yAxisLabel: ITdAxisLabel = {
    show: true,
    inside: false,
    fontStyle: TdFontStyle.Italic,
    fontWeight: TdFontWeight.Bold,
    formatter: '${value}',
  };

  roundRectMarkPointSymbol: TdMarkPointSymbol = TdMarkPointSymbol.RoundRect;
  lineStyle: ITdLineStyle;

  xAxisLabel: ITdAxisLabel = {
    show: true,
    inside: false,
    fontStyle: TdFontStyle.Italic,
    fontWeight: TdFontWeight.Bold,
  };

  splitLine: ITdSplitLine = {
    lineStyle: {
      type: TdLineType.Dashed,
    },
  };

  barYaxisPosition: TdYAxisPosition = TdYAxisPosition.Right;
  lineXAxisPosition: TdXAxisPosition = TdXAxisPosition.Top;
  lineXAxisPositionNoSeries: TdXAxisPosition = TdXAxisPosition.Bottom;

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/teradata.svg',
      ),
    );
    this._iconRegistry.addSvgIcon(
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/teradata.svg',
      ),
    );
    this._iconRegistry.addSvgIcon(
      'teradata-dark',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/teradata-dark.svg',
      ),
    );
  }
}
