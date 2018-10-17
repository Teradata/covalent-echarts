import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'app-chart-types-main',
  templateUrl: './chart-types-main.component.html',
  styleUrls: ['./chart-types-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ChartTypesMainComponent {

  items: Object[] = [{
    color: 'deep-purple-A700',
    icon: 'insert_chart',
    route: 'bar',
    title: 'Bart Chart',
  }, {
    color: 'blue-A700',
    icon: 'show_chart',
    route: 'line',
    title: 'Line Chart',
  }, {
    color: 'pink-A700',
    icon: 'bubble_chart',
    route: 'scatter',
    title: 'Scatter Chart',
  },
];

atomicComponents: Object[] = [
  {
    color: 'cyan-A700',
    icon: 'style',
    route: 'series-component',
    title: 'Series',
  },
  {
    color: 'deep-orange-A700',
    icon: 'info',
    route: 'tooltip-component',
    title: 'Tooltip',
  },
  {
    color: 'lime-A700',
    icon: 'trending_flat',
    route: 'x-axis-component',
    title: 'X-Axis',
  },
  {
    color: 'amber-A700',
    icon: 'trending_up',
    route: 'y-axis-component',
    title: 'Y-Axis',
  },
  {
    color: 'green-A700',
    icon: 'info',
    route: 'series-tooltip-component',
    title: 'Series Tooltip',
  },
  {
    color: 'orange-A700',
    icon: 'text_fields',
    route: 'legend-component',
    title: 'Legend',
  },
];

  constructor(private media: TdMediaService) { }

}
