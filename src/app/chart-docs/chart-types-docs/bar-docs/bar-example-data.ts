import { ITdSplitLine, TdLineType, TdSeriesType, TdAxisType, TdToolTipTrigger, ITdSeriesTooltip, ITdAxisLabel, TdFontStyle, TdFontWeight, ITdAxisLine } from '@covalent/echarts/base';
import { ITdBarSeries, ITdBarConfig } from '@covalent/echarts/bar';

const splitLineBar: ITdSplitLine = {
  lineStyle: {
    type: TdLineType.Dotted,
  },
};

const barPlot: ITdBarSeries[] = [
  {
    type: TdSeriesType.Bar,
    itemStyle: {
      opacity: 0.75,
      color: '#575757',
    },
    markPoint: {
      data: [{ name: 'test', value: 130, xAxis: 1, yAxis: 130 }],
    },
    name: 'Yesterday',
    data: [150, 130, 150, 120, 150, 120],
  },
  {
    type: TdSeriesType.Bar,
    markPoint: {
      data: [{ name: 'Target', value: 80, xAxis: 1, yAxis: 121 }],
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

const barConfig: ITdBarConfig = {
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
      max: 300,
    },
  ],
  series: barPlot,
  tooltip: {
    show: true,
    trigger: TdToolTipTrigger.Item,
    showContent: true,
  },
};

const seriesToolTip: ITdSeriesTooltip[] = [
  {
    icon: 'person',
    textStyle: {
      color: '#818181',
    },
    backgroundColor: '#fff',
    // formatter: ' inline Label {a}: {c0}',
  },
  {
    icon: 'dashboard',
    textStyle: {
      color: '#00efff',
    },
    // formatter: 'inline Label {a}: {c0}',
  },
];

const xAxisLabel: ITdAxisLabel = {
  show: true,
  inside: false,
  fontStyle: TdFontStyle.Italic,
  fontWeight: TdFontWeight.Bold,
};

const yAxisLabel: ITdAxisLabel = {
  show: true,
  inside: false,
  fontStyle: TdFontStyle.Italic,
  fontWeight: TdFontWeight.Bold,
  formatter: '${value}',
};

const yLine: ITdAxisLine = {
  show: true,
  lineStyle: { color: '#777777', width: 2 },
};

const xLine: ITdAxisLine = {
  show: true,
  lineStyle: { color: '#777777', width: 2 },
};

export { seriesToolTip, barConfig, barPlot, splitLineBar, xAxisLabel, yAxisLabel, yLine, xLine };
