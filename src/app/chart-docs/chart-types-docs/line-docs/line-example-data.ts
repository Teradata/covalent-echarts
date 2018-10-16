import {
  ITdSeriesTooltip,
  ITdAxisLabel,
  TdFontStyle,
  TdFontWeight,
  ITdAxisLine,
  TdSeriesType,
  TdAxisType,
  TdToolTipTrigger,
  TdLineType,
  ITdSplitLine,
} from '@covalent/echarts/base';
import { ITdLineConfig, ITdLineSeries } from '@covalent/echarts/line';

const NOW: Date = new Date();

const seriesLineToolTip: any[] = [
  {
    textStyle: {
      color: '#818181',
    },
    backgroundColor: '#fff',
    // formatter: ' inline Label {a}: {c0}',
  },
  {
    textStyle: {
      color: '#00efff',
    },
    // formatter: 'test {a}: {c0}',
  },
];

const splitLine: ITdSplitLine = {
  lineStyle: {
    type: TdLineType.Dashed,
  },
};

const linePlotNoSeries: ITdLineSeries[] = [
  {
    name: 'Line Series 1',
    type: TdSeriesType.Line,
    lineStyle: {
      color: '#575757',
      width: 2,
      shadowBlur: 5,
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 5,
      opacity: 0.75,
    },
    data: [
      {
        name: NOW.toISOString(),
        value: [NOW.toISOString(), 200],
      },
      {
        name: new Date(NOW.getTime() + 24 * 3600 * 1000).toISOString(),
        value: [new Date(NOW.getTime() + 24 * 3600 * 1000).toISOString(), 50],
      },
      {
        name: new Date(NOW.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
        value: [
          new Date(NOW.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
          100,
        ],
      },
    ],
  },
];

const linePlot: ITdLineSeries[] = [
  {
    name: 'Revenue',
    type: TdSeriesType.Line,
    lineStyle: {
      color: 'red',
      width: 2,
      shadowBlur: 5,
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 5,
      opacity: 0.75,
    },
    data: [
      {
        name: NOW.toISOString(),
        value: [NOW.toISOString(), 200],
      },
      {
        name: new Date(NOW.getTime() + 24 * 3600 * 1000).toISOString(),
        value: [new Date(NOW.getTime() + 24 * 3600 * 1000).toISOString(), 50],
      },
      {
        name: new Date(NOW.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
        value: [
          new Date(NOW.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
          100,
        ],
      },
    ],
  },
  {
    name: 'Sales',
    type: TdSeriesType.Line,
    lineStyle: {
      color: '#575757',
      width: 2,
      shadowBlur: 5,
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 5,
      opacity: 0.75,
    },
    data: [
      {
        name: NOW.toISOString(),
        value: [NOW.toISOString(), 200],
      },
      {
        name: new Date(NOW.getTime() + 10 * 3600 * 1000).toISOString(),
        value: [new Date(NOW.getTime() + 10 * 3600 * 1000).toISOString(), 50],
      },
      {
        name: new Date(NOW.getTime() + 3 * 24 * 3600 * 1000).toISOString(),
        value: [
          new Date(NOW.getTime() + 3 * 24 * 3600 * 1000).toISOString(),
          100,
        ],
      },
    ],
  },
];

const lineConfig: ITdLineConfig = {
  xAxis: [
    {
      show: true,
      type: TdAxisType.Time,
      boundaryGap: false,
      axisLine: { show: false },
      splitLine: { show: false },
    },
  ],
  yAxis: [{ show: true, type: TdAxisType.Value, axisLabel: { inside: true } }],
  series: linePlot,
  tooltip: {
    show: true,
    trigger: TdToolTipTrigger.Axis,
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

export {
  linePlot,
  splitLine,
  linePlotNoSeries,
  seriesLineToolTip,
  seriesToolTip,
  lineConfig,
  xAxisLabel,
  yAxisLabel,
  yLine,
  xLine,
};
