import {
  TdSeriesType,
  TdAxisType,
  TdToolTipTrigger,
  TdLineType,
  TdYAxisPosition,
} from '@covalent/echarts/base';

import { ITdBarSeries, ITdBarConfig } from '@covalent/echarts/bar';

const comboPlot: ITdBarSeries[] = [
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

const comboConfig: ITdBarConfig = {
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
  series: comboPlot,
  tooltip: {
    show: true,
    trigger: TdToolTipTrigger.Item,
    showContent: true,
  },
};

export { comboPlot, comboConfig };
