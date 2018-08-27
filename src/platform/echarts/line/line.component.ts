import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import 'echarts/lib/chart/line';

import { BASE_CHART_PROVIDER } from '../base';

@Component({
  selector: 'td-chart-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BASE_CHART_PROVIDER],
})
export class TdLineChartComponent {

  @Input('data') data: any[];

}
