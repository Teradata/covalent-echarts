import {
  ITdBarSeries,
} from '../../platform/echarts';

export const barPlot: ITdBarSeries[] = [
  {
    type: 'bar',
    markPoint: {
      data: [{ name: 'test', value: 130, xAxis: 1, yAxis: 130 }],
    },
    name: 'Yesterday',
    data: [150, 130, 150, 120, 150, 120],
  },
  {
    type: 'bar',
    markPoint: {
      data: [{ name: 'Target', value: 80, xAxis: 1, yAxis: 121 }],
    },
    markLine: {
      data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }],
      symbol: 'circle',
    },
    name: 'Today',
    data: [80, 122, 80, 120, 80, 120],
  },
];
