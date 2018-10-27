import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ITdBarSeries,
} from '../../../../platform/echarts/bar';

@Component({
  selector: 'app-bar-docs',
  templateUrl: './bar-docs.component.html',
  styleUrls: ['./bar-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class BarDocsComponent {
  // Chart data
  barPlot: ITdBarSeries[] = [
    {
      type: 'bar',
      itemStyle: {
        opacity: 0.95,
        color: '#007373',
      },
      markPoint: {
        data: [{ name: 'test', value: 130, xAxis: 1, yAxis: 130 }],
      },
      name: 'Yesterday',
      data: [150, 130, 150, 120, 150, 120],
    },
    {
      type: 'bar',
      itemStyle: {
        opacity: 0.95,
        color: '#1B98C6',
      },
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

  // Chart config
  barConfig: any = {
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
        type: 'time',
        boundaryGap: false,
      },
    ],
    yAxis: [
      {
        show: true,
        type: 'value',
        axisLabel: { inside: false },
        max: 300,
      },
    ],
    series: this.barPlot,
    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
    },
  };
}
