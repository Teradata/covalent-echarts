import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  OnDestroy,
} from '@angular/core';

import {
  TdChartOptionsService,
  assignDefined,
} from '@covalent/echarts/base';

@Component({
  template: '',
  selector: 'td-chart-dataset',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdDatasetComponent implements OnChanges, OnDestroy {

  private _state: any = {};

  @Input('config') config: any = {};
  @Input('source') source: object | any[];
  @Input('dimensions') dimensions: any[];
  @Input('sourceHeader') sourceHeader: boolean;

  constructor(private _optionsService: TdChartOptionsService) {}

  ngOnChanges(): void {
    this._setOptions();
  }

  ngOnDestroy(): void {
    this._removeOption();
  }

  private _setOptions(): void {
    let config: any = assignDefined(this._state, {
      source: this.source,
      dimensions: this.dimensions,
      sourceHeader: this.sourceHeader,

    }, this.config ? this.config : {});
    // set dataset configuration in parent chart and render new configurations
    this._optionsService.setOption('dataset', config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption('dataset');
  }

}
