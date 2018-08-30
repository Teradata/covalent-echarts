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
    itemStyle: {
      opacity: 0.75,
      color: '#575757',
    },
    name: 'Historical Model',
    data: [100],
  }, {
    itemStyle: {
      opacity: 0.75,
      color: '#00E5FF',
    },
    name: 'Today',
    data: [80],
  }];

  showTooltip: boolean = true;
  linePlot: any[] = [{
    name: 'Line Test',
    lineStyle: {
      color: '#575757',
      width: 2,
      shadowBlur: 5,
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 5,
      opacity: 0.75,
    },
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

  constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

}
