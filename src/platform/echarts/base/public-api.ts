export * from './base.module';
export { TdChartComponent } from './chart.component';
export { TdChartOptionsService, CHART_PROVIDER } from './chart.service';
export * from './utils';
export {
  ITdAxisLabel,
  ITdAxisLine,
  ITdAxisPointer,
  ITdAxisPointerLabel,
  ITdAxisTick,
  ITdNameAxisTextStyle,
  ITdSplitArea,
  ITdSplitLine,
  ITdBaseStyle,
  TdXAxisPosition,
  TdYAxisPosition,
  TdNameLocation,
  TdAxisType,
  ITdXAxisConfig,
  ITdYAxisConfig,
} from './axis/axis.interface';

export {
  TdSeriesType,
  ITdItemStyle,
  ITdAreaStyle,
  ITdEmphasis,
  ITdMarkPoint,
  TdCoordinateSystem,
  ITdMarkLine,
  ITdMarkArea,
  ITdLineLabel,
  ITdMarkLineEmphasis,
  TdSeriesLayoutBy, 
  TdProgressiveChunkMode,
  ITdSeriesTooltip, } from './series.base.interface';

export {
  TdAlign,
  TdFontStyle,
  TdFontWeight,
  TdVerticalAlign,
  TdFontFamily,
  TdPointerType,
  TdStatus,
  TdLineType,
  ITdLineStyle,
  TdAreaOrigin,
  TdMarkPointSymbol,
  TdAnimationEasing,
  ITdTextStyle,
  TdLineLabelPosition,
  ITdLineCurveStyle,
  ITdLabel,
  ITdTooltip,
  TdToolTipTrigger,
} from './base.types';

export { ITdBarSeries } from '../bar/bar-series.interface';
export { ITdLineSeries } from '../line/line-series.interface';
export { ITdBarConfig } from '../bar/bar-config.interface';
export { ITdLineConfig } from '../line/line-config.interface';
export { ITdScatterSeries } from '../scatter/scatter-series.interface';
export { ITdScatterConfig } from '../scatter/scatter-config.interface';
