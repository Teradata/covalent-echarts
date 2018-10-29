import { Component } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/dataZoom';

import { tdCollapseAnimation, tdRotateAnimation, tdFadeInOutAnimation } from '@covalent/core/common';

@Component({
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  animations: [tdCollapseAnimation, tdRotateAnimation, tdFadeInOutAnimation],
})
export class ComponentsComponent {
  
  miniNav: boolean = false;

  routes: Object[] = [
    {
      description: 'Atomic and Config Options',
      icon: 'insert_chart',
      route: ['types', 'bar'],
      title: 'Bar',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'show_chart',
      route: ['types', 'line'],
      title: 'Line',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'bubble_chart',
      route: ['types', 'scatter'],
      title: 'Scatter',
    },
    {
      description: 'Example using line/bar and 2 y-axis',
      icon: 'multiline_chart',
      route: ['types', 'combination'],
      title: 'Combination',
    },
  ];

  atomicComponentRoutes: Object[] = [
    {
      description: 'Series component, determines chart type and series styling.',
      icon: 'style',
      route: '',
      title: 'Series',
    },
    {
      description: 'Chart/Series Tooltip component, enable/disable and other tooltip level options.',
      icon: 'info',
      route: '',
      title: 'Tooltip',
    },
    {
      description: 'X and Y Axis components styling and other options',
      icon: 'trending_flat',
      route: '',
      title: 'Axis',
    },
  ];

  constructor(public media: TdMediaService) {
  }

  toggleMiniNav(): void {
    this.miniNav = !this.miniNav;
  }
}
