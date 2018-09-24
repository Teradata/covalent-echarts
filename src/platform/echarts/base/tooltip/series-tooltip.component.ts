import { 
  Component,
  OnInit,
  Input,
  ContentChild,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef,
  ElementRef,
  ChangeDetectionStrategy,
  Directive,
  OnChanges,
  OnDestroy, 
} 
  from '@angular/core';

import { TdChartOptionsService } from '../chart.service';
import { assignDefined } from '../utils';

interface ITdSeriesTooltip {
  
  position?: any;
  formatter?: any;
  backgroundColor?: any;
  borderColor?: any;
  borderWidth?: number;
  padding?: number;
  textStyle?: any;
  extraCssText?: string;
}

export class TdTooltipContext {
  $implicit: any;
  ticket: string;
}

@Directive({
  selector: 'ng-template[tdSeriesTooltipFormatter]',
})
export class TdChartSeriesTooltipFormatterDirective {
}

@Component({
  selector: 'td-chart-series-tooltip',
  templateUrl: './series-tooltip.component.html',
  styleUrls: ['./series-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdSeriesTooltipComponent implements OnChanges, OnInit, OnDestroy {

  private _state: any = {};

  _context: TdTooltipContext = new TdTooltipContext();

  @Input('config') config: ITdSeriesTooltip = {};
  @Input('configArray') configArray: ITdSeriesTooltip[] = [];
  @Input('index') index: number = 0;
  @Input('position') position: string | string[] | number[];
  @Input('backgroundColor') backgroundColor: string = 'rgba(50,50,50,0.7)';
  @Input('borderColor') borderColor: string = '#333';
  @Input('borderWidth') borderWidth: number = 0;
  @Input('padding') padding: number = 5;
  @Input('textStyle') textStyle: any = {
    color: '#FFF',
  };
  @Input('extraCssText') extraCssText: string;

  @ContentChild(TdChartSeriesTooltipFormatterDirective, {read: TemplateRef}) formatterTemplate: TemplateRef<any>;
  @ViewChild('tooltipContent') fullTemplate: TemplateRef<any>;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _elementRef: ElementRef,
              private _optionsService: TdChartOptionsService) {
  }

  ngOnInit(): void {
    this._setOptions();
  }

  ngOnChanges(): void {
    this._setOptions();
  }

  ngOnDestroy(): void {
    this._removeOption();
  }

  private _setOptions(): void {
    let config: any = assignDefined(this._state, this.config ? this.config : {}, {
      position: this.position,
      formatter: (params: any, ticket: any, callback: (ticket: string, html: string) => void) => {
        this._context = {
          $implicit: params,
          ticket: ticket,
        };
        // timeout set since we need to set the HTML at the end of the angular lifecycle when
        // the tooltip delay is more than 0
        setTimeout(() => {
          callback(ticket, (<HTMLElement>this._elementRef.nativeElement).innerHTML);
        });
        this._changeDetectorRef.markForCheck();
        return (<HTMLElement>this._elementRef.nativeElement).innerHTML;
      },
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      borderWidth: this.borderWidth,
      padding: this.padding,
      textStyle: this.textStyle,
      extraCssText: this.extraCssText,
    });
    // set series tooltip configuration in parent chart and render new configurations
    if (this.configArray.length >= 1) {
      this._optionsService.setSeriesOptionArray('tooltip', this.configArray);
    } else {
      this._optionsService.setSeriesOption('tooltip', config, this.index);
    }
  }

  private _removeOption(): void {
    this._optionsService.clearSeriesOption('tooltip');
  }

}
