import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/tooltip';

@Component({
  selector: 'app-chart-types-docs',
  templateUrl: './chart-types-docs.component.html',
  styleUrls: ['./chart-types-docs.component.scss'],
})
export class ChartTypesDocsComponent {

  routes: Object[] = [
    {
      description: 'List of all examples including in the documentation',
      icon: 'picture_in_picture',
      route: '.',
      title: 'Chart Types',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'insert_chart',
      route: 'bar',
      title: 'Bar',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'show_chart',
      route: 'line',
      title: 'Line',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'bubble_chart',
      route: 'scatter',
      title: 'Scatter',
    },
    {
      description: 'Example using line/bar and 2 y-axis',
      icon: 'multiline_chart',
      route: 'combination',
      title: 'Combination',
    },
    // {
    //   description: 'Atomic and Config Options',
    //   icon: 'attach_file',
    //   route: 'file-upload',
    //   title: 'NPath',
    // },
  ];

  atomicComponents: Object[] = [
    {
      description: 'Series component, determines chart type and series styling.',
      icon: 'style',
      route: '',
      title: 'Series',
    },
    {
      description: 'Global tooltip component, enable/disable and other tooltip level options.',
      icon: 'info',
      route: '',
      title: 'Tooltip',
    },
    {
      description: 'X-Axis component, x-axis styling and other options',
      icon: 'trending_flat',
      route: '',
      title: 'X-Axis',
    },
    {
      description: 'Y-Axis component, y-axis styling and other options',
      icon: 'trending_up',
      route: '',
      title: 'Y-Axis',
    },
    {
      description: 'Chart legend options, including position and styling.',
      icon: 'text_fields',
      route: '',
      title: 'Legend',
    },
    {
      description: 'Series Tooltip, extends from main tooltip settings and provides specific series level control.',
      icon: 'info',
      route: '',
      title: 'Series Tooltip',
    },
  ];

  constructor(public media: TdMediaService) {}
}
