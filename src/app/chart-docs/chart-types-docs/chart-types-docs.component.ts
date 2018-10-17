import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';
// import 'echarts/lib/component/tooltip';

@Component({
  selector: 'app-chart-types-docs',
  templateUrl: './chart-types-docs.component.html',
  styleUrls: ['./chart-types-docs.component.scss'],
})
export class ChartTypesDocsComponent implements OnInit {

  routes: Object[] = [
    {
      description: 'List of all examples including in the documentation',
      icon: 'picture_in_picture',
      route: '.',
      title: 'Chart Types',
    },
    {
      description: 'Amotic and Config Options',
      icon: 'insert_chart',
      route: 'bar',
      title: 'Bar',
    },
    {
      description: 'Amotic and Config Options',
      icon: 'show_chart',
      route: 'line',
      title: 'Line',
    },
    {
      description: 'Amotic and Config Options',
      icon: 'bubble_chart',
      route: 'scatter',
      title: 'Scatter',
    },
    // {
    //   description: 'Amotic and Config Options',
    //   icon: 'attach_file',
    //   route: 'file-upload',
    //   title: 'NPath',
    // },
  ];

  atomicComponents: Object[] = [
    {
      description: 'Series component, determines chart type and series styling.',
      icon: 'style',
      route: 'series-component',
      title: 'Series',
    },
    {
      description: 'Global chart component, enable/disable and other chart level options.',
      icon: 'info',
      route: 'tooltip-component',
      title: 'Tooltip',
    },
    {
      description: 'X-Axis component, x-axis styling and other options',
      icon: 'trending_flat',
      route: 'x-axis-component',
      title: 'X-Axis',
    },
    {
      description: 'Y-Axis component, y-axis styling and other options',
      icon: 'trending_up',
      route: 'y-axis-component',
      title: 'Y-Axis',
    },
    {
      description: 'Series Tooltip, Extends from chart wide tooltip settings and provides specific series level control.',
      icon: 'info',
      route: 'series-tooltip-component',
      title: 'Series Tooltip',
    },
    {
      description: 'Chart legend options, incuding position  and styling.',
      icon: 'text_fields',
      route: 'legend-component',
      title: 'Legend',
    },
  ];

  constructor(private media: TdMediaService) {}

  ngOnInit() {}
}
