import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ITdLineSeries,
} from '../../../../platform/echarts/line';

@Component({
  selector: 'app-line-docs',
  templateUrl: './line-docs.component.html',
  styleUrls: ['./line-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class LineDocsComponent {
  showTooltip: boolean = true;
  today: Date = new Date();

  // Chart data
  linePlot: ITdLineSeries[] = [
    {
      name: 'Revenue',
      type: 'line',
      itemStyle: {
        opacity: 0.95,
        color: '#007373',
      },
      data: [
        {
          name: this.today.toISOString(),
          value: [this.today.toISOString(), 200],
        },
        {
          name: new Date(this.today.getTime() + 24 * 3600 * 1000).toISOString(),
          value: [new Date(this.today.getTime() + 24 * 3600 * 1000).toISOString(), 50],
        },
        {
          name: new Date(this.today.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
          value: [
            new Date(this.today.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
            100,
          ],
        },
      ],
    },
    {
      name: 'Sales',
      type: 'line',
      itemStyle: {
        opacity: 0.95,
        color: '#1B98C6',
      },
      data: [
        {
          name: this.today.toISOString(),
          value: [this.today.toISOString(), 200],
        },
        {
          name: new Date(this.today.getTime() + 10 * 3600 * 1000).toISOString(),
          value: [new Date(this.today.getTime() + 10 * 3600 * 1000).toISOString(), 50],
        },
        {
          name: new Date(this.today.getTime() + 3 * 24 * 3600 * 1000).toISOString(),
          value: [
            new Date(this.today.getTime() + 3 * 24 * 3600 * 1000).toISOString(),
            100,
          ],
        },
      ],
    },
  ];

  // Chart config
  lineConfig: any = {
    xAxis: [
      {
        show: true,
        type: 'time',
        boundaryGap: false,
      },
    ],
    yAxis: [{ show: true, type: 'value', axisLabel: { inside: true } }],

    series: this.linePlot,
    tooltip: {
      show: true,
      trigger: 'axis',
      showContent: true,
    },
  };
}
