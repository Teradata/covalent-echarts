import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { TdChartComponent } from '@covalent/echarts/base';

@Component({
  selector: 'types-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TypesBarComponent {

  @ViewChild('atomic') atomic: TdChartComponent;

  // Chart config
  config: any = {
    toolbox: {
      showTitle: true,
      top: 0,
      right: '30px',
      show: true,
      feature: {
        dataZoom: {
          xAxisIndex: 'none',
      },
          dataView: {readOnly: false},
          magicType: {type: ['line', 'bar', 'stack'], title: {line: 'Show as line chart', bar: 'Show as bar chart', stack: 'Show as stacked'}},
          restore: {title: 'Restore'},
          saveAsImage: {title: 'Save image'},
      },
  },
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
    series: [
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
    ],
    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
    },
  };


// ngAfterViewInit(): void {
//   console.log(this.atomic.instance)
//   let count: number = 0;
//   setInterval(() => {
//     count++;
//     const axisData: string = 'Test ' + count;

//     const data0 = this.config.series[0].data;
//     const data1 = this.config.series[1].data;
//     // data0.shift();
//     data0.push(Math.round(Math.random() * 1000));
//     // data1.shift();
//     data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

//     this.config.xAxis[0].data.shift();
//     this.config.xAxis[0].data.push(axisData);
//     // this.config.xAxis[1].data.shift();
//     // this.config.xAxis[1].data.push(100);

//     this.atomic.instance.setOption(this.config);
//   }, 2100);
  
// }

  contentToOption(args, config): void {
    console.log(args, config)
    config.series[0].data[0] = 8;

  }
}
