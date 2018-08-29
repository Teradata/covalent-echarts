import { Component, ChangeDetectorRef } from '@angular/core';

export const NOW: Date = new Date();

import 'echarts/lib/component/tooltip';

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {

  barPlot: any = [{
    color: '#575757',
    opacity: 0.75,
    name: 'Historical Model',
    type: 'bar',
    data: [100],
  }, {
    color: '#00E5FF',
    opacity: 0.75,
    name: 'Today',
    type: 'bar',
    data: [80],
  }];

  showTooltip: boolean = true;
  linePlot: any[] = [{
    name: 'Line Test',
    color: '#575757',
    shadowBlur: 5,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffsetX: 0,
    shadowOffsetY: 5,
    width: 2,
    opacity: 0.75,
    data: [{
      name: NOW.toISOString(),
      value: [NOW.toISOString(), 200],
    }, {
      name: new Date(NOW.getTime() + (24 * 3600 * 1000)).toISOString(),
      value: [new Date(NOW.getTime() + (24 * 3600 * 1000)).toISOString(), 50],
    }, {
      name: new Date(NOW.getTime() + (2 * 24 * 3600 * 1000)).toISOString(),
      value: [new Date(NOW.getTime() + (2 * 24 * 3600 * 1000)).toISOString(), 100],
    }],
  }];

  series: any[] = [
    {
        data: [65, 300, 100, 200, 100, 100, 100],
        type: 'bar',
        
    },
    {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        
    },
    ];

  xAxisCombo: any = {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  };

  yAxisCombo: any[] = [
    {
      position: 'left',
        type : 'value',
        name: 'test',
        min: 0,
        max: 2000,
        splitNumber: 2,
        zlevel: 0,
        splitLine: {
            lineStyle: {color: 'red'},
        },
        axisLabel: {show: true},
        
    },
    {
        position: 'right',
        type : 'value',
        min: 0,
        max: 4000,
        splitNumber: 3,
        zlevel: 0,
        
    },
];

  constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

}
