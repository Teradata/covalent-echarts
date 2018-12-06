import {
  Component,
  Input,
  Directive,
  TemplateRef,
  ChangeDetectionStrategy,
  ElementRef,
  ChangeDetectorRef,
  OnChanges,
  ContentChild,
  ViewChild,
  OnDestroy,
} from '@angular/core';

import {
  TdChartOptionsService,
  ITdLabel,
  ITdShadow,
  ITdItemStyle,
} from '@covalent/echarts/base';

import { TdChartComponent } from '@covalent/echarts/base';
import { assignDefined, LanguageDefaults } from '..//base/utils';

import { TdTextPosition, TdTextAlign } from '../base/base.types';

export type TdToolboxOrient = 'horizontal' | 'vertical';
export type TdImageType = 'png' | 'jpeg';
// export type TdMagicType = 'line' | 'bar' | 'stack' | 'tiled';

export interface ITdMagicAcceptedTypes {
  line?: string;
  bar?: string;
  stack?: string;
  tiled?: string;
}

export interface ITdFeatureBrushOptions {
  rect?: string;
  polygon?: string;
  lineX?: string;
  keep?: string;
  clear?: string;
}

export interface ITdToolboxIconEmphasis extends ITdItemStyle, ITdShadow {}

export interface ITdFeatureIconStyle extends ITdItemStyle, ITdShadow {
  textPosition?: TdTextPosition;
  textAlign?: TdTextAlign;
  emphasis?: ITdToolboxIconEmphasis;
}

export interface ITdZoomTitles {
  zoom?: string;
  back?: string;
}

export interface ITdSaveAsImage {
  type?: TdImageType;
  name?: string;
  backgroundColor?: any;
  excludeComponents?: string[]; // defaults to ['toolbox']
  show?: boolean;
  title?: string;
  icon?: string;
  iconStyle?: ITdFeatureIconStyle;
  pixelRatio?: number;
}

export interface ITdRestore {
  show?: boolean;
  title?: string;
  icon?: string;
  iconStyle?: ITdFeatureIconStyle;
}

export interface ITdDataView {
  show?: boolean;
  title?: string;
  icon?: string;
  iconStyle?: ITdFeatureIconStyle;
  readOnly?: boolean;
  optionToContent?: Function;
  contentToOption?: Function;
  lang?: string[]; // Defaults to Chinese, there are 3 names in data view, which are ['data view', 'turn off' and 'refresh'].
  textareaColor?: string;
  textareaBorderColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

export interface ITdDataZoom {
  show?: boolean;
  title?: ITdZoomTitles;
  icon?: ITdZoomTitles;
  iconStyle?: ITdFeatureIconStyle;
  xAxisIndex?: number | number[] | boolean;
  yAxisIndex?: number | number[] | boolean;
}

export interface ITdMagicType {
  show?: boolean;
  type?: string[]; // only expects 'line' | 'bar' | 'stack' | 'tiled';
  title?: ITdMagicAcceptedTypes;
  icon?: ITdMagicAcceptedTypes;
  iconStyle?: ITdFeatureIconStyle;
  option?: {
    line?: object;
    bar?: object;
    stack?: object;
    tiled?: object;
  };
  seriesIndex?: {
    line?: any[];
    bar?: any[];
    stack?: any[];
    tiled?: any[];
  };
}

export interface ITdBrush {
  type?: any[];
  icon?: ITdFeatureBrushOptions;
  title?: ITdFeatureBrushOptions;
}

export interface ITdToolboxFeature {
  saveAsImage?: ITdSaveAsImage;
  restore?: ITdRestore;
  dataView?: ITdDataView;
  dataZoom?: ITdDataZoom;
  magicType?: ITdMagicType;
  brush?: ITdBrush;
}

export class TdToolboxContext {
  $implicit: any;
}

@Directive({
  selector: 'ng-template[tdToolboxFormatter]',
})
export class TdChartToolboxFormatterDirective {
}

@Component({
  selector: 'td-chart-toolbox',
  templateUrl: './toolbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartToolboxComponent implements OnChanges, OnDestroy {

  private _state: any = {};

  _context: TdToolboxContext = new TdToolboxContext();
  _languageDefaults: LanguageDefaults = new LanguageDefaults();

  @Input('config') config: any = {};
  @Input('instance') _instance: TdChartComponent;
  
  @Input('show') show: boolean = true;
  @Input('name') trigger: string;
  @Input('orient') orient: TdToolboxOrient;
  @Input('itemSize') itemSize: number;
  @Input('itemGap') itemGap: number;
  @Input('showTitle') showTitle: boolean = true;
  @Input('label') label: ITdLabel;
  @Input('feature') feature: ITdToolboxFeature = {};
  @Input('iconStyle') iconStyle: ITdFeatureIconStyle;
  @Input('zlevel') zlevel: number;
  @Input('z') z: number;
  @Input('transitionDuration') transitionDuration: number = 0.5;
  @Input('left') left: string | number = 'auto';
  @Input('top') top: string | number = 'auto';
  @Input('right') right: string | number = 'auto';
  @Input('bottom') bottom: string | number = 'auto';
  @Input('width') width: string | number = 'auto';
  @Input('height') height: string | number = 'auto';

  @ContentChild(TdChartToolboxFormatterDirective, {read: TemplateRef}) formatterTemplate: TemplateRef<any>;
  @ViewChild('toolboxContent') fullTemplate: TemplateRef<any>;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _elementRef: ElementRef,
              private _optionsService: TdChartOptionsService) {
  }

  ngOnChanges(): void {
    this._setOptions();
  }

  ngOnDestroy(): void {
    this._removeOption();
  }

  private _setOptions(): void {
    if (this.formatterTemplate) {
      this.feature = {
        ...this.feature,
        dataView: {
          optionToContent: this._optionToContentFormatter(),
        },
      };
    }

    let config: any = assignDefined(this._state, this.config ? this.config : {}, {
      show: this.show,
      name: this.trigger,
      orient: this.orient,
      itemSize: this.itemSize,
      itemGap: this.itemGap,
      showTitle: this.showTitle,
      label: this.label,
      feature: this._languageDefaults.setFeatureLang(this.feature),
      iconStyle: this.iconStyle,
      zlevel: this.zlevel,
      z: this.z,
      transitionDuration: this.transitionDuration,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      width: this.width,
      height: this.height,
    });
    // set toolbox configuration in parent chart and render new configurations
    this._optionsService.setOption('toolbox', config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption('toolbox');
  }

  private _optionToContentFormatter(): Function {
    return (params: any, html: any) => {
      console.log(params);
      this._context = {
        $implicit: params,
      };
      // timeout set since we need to set the HTML at the end of the angular lifecycle when
      // the toolbox delay is more than 0
      this._changeDetectorRef.markForCheck();
      return (<HTMLElement>this._elementRef.nativeElement).innerHTML;
    };
  }
}
