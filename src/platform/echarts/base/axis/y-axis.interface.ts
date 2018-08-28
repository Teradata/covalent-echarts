import {
  TdNameLocation,
  TdAlign,
  TdAxisType,
  TdfontStyle,
  TdFontWeight,
  TdPosition,
  TdVerticalAlign,
  TdFontFamily,
  TdPointerType,
  TdStatus,
  TdAxisLineType,
} from '../base.types';

export interface ITdYAxis {
  id?: string;
  show?: boolean;
  gridIndex?: number;
  position?: TdPosition;
  offset?: number;
  type?: TdAxisType;
  name?: string;
  nameLocation?: any;
  nameTextSytle?: INameAxisTextStyle;
  nameGap?: number;
  nameRotate?: number;
  inverse?: false;
  boundaryGap?: boolean;
  min?: number;
  max?: number;
  scale?: boolean;
  splitNumber?: number;
  minInterval?: number;
  interval?: number;
  /*
     * Only valid when using numeric axes with type: 'log' 
    */
  logBase?: number;
  /*
     * True for axis that cannot be interacted with. 
    */
  silent?: boolean;
  triggerEvent?: boolean;
  axisLine?: IAxisLine;
  axisTick?: IAxisTick;
  axisLabel?: IAxisLabel;
  splitLine?: ISplitLine;
  splitArea?: ISplitArea;
  data?: any[];
  axisPointer?: IAxisPointer;
  zlevel?: number;
  z?: number;
}

export interface IAxisLine {
  show?: boolean;
  onZero?: boolean;
  onZeroAxisIndex?: number;
  symbol?: string | string[];
  symbolSize?: number | number[];
  symbolOffset?: number | number[];
  lineStyle?: ITdStyle;
}

export interface IAxisLabel {
  show?: boolean;
  interval?: any;
  inside?: boolean;
  rotate?: number;
  margin?: number;
  formatter?: any;
  showMinLabel?: boolean;
  showMaxLabel?: boolean;
  color?: any;
  fontStyle?: TdfontStyle;
  fontWeight?: TdFontWeight;
  fontFamily?: TdFontFamily;
  fontSize?: number;
  align?: TdAlign;
  verticalAlign?: TdVerticalAlign;
  lineHeight?: number;
  backgroundColor?: string | object;
  borderColor?: string | object;
  borderWidth?: number;
  borderRadius?: number;
  padding?: number;
  shadowColor?: string | object;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  width?: number | string;
  height?: number | string;
  textBorderColor?: string | object;
  textBorderWidth?: number;
  textShadowColor?: string | object;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
}

export interface IAxisTick {
  alignWithLabel?: boolean;
  interval?: any;
  inside?: boolean;
  length?: number;
  lineStyle?: ITdStyle;
}

export interface ISplitLine {
  show?: boolean;
  interval?: any;
  lineStyle?: ITdStyle;
}

export interface ISplitArea {
  show?: boolean;
  interval?: any;
  areaStyle?: ITdBaseStyle;
}

export interface ITdBaseStyle {
  color?: any;
  shadowBlur?: number;
  shadowColor?: any;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
}

export interface ITdStyle {
  color?: any;
  width?: number;
  type?: TdAxisLineType;
  shadowBlur?: number;
  shadowColor?: any;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
}

export interface IAxisPointer {
  show?: boolean;
  type?: TdPointerType;
  snap?: boolean;
  z?: number;
  label?: IAxisPointerLabel;
  lineStyle?: ITdStyle;
  shadowStyle?: ITdBaseStyle;
  triggerTooltip?: boolean;
  value?: number;
  status?: TdStatus;
  handle?: object; // TODO Look into this more
}

export interface IAxisPointerLabel {
  show: boolean;
  precision: string | number;
  formatter: any;
  margin: number;
  color: string;
  fontStyle: TdfontStyle;
  fontWeight: TdFontWeight;
  fontFamily: TdFontFamily;
  fontSize: number;
  lineHeight: number;
  width: number | string;
  height: number | string;
  textBorderColor: string;
  textBorderWidth: number;
  textShadowColor: string;
  textShadowBlur: number;
  textShadowOffsetX: number;
  textShadowOffsetY: number;
  padding: number | number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  shadowBlur: number;
  shadowColor: any;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

export interface INameAxisTextStyle {
  color?: string | object;
  fontStyle?: TdfontStyle;
  fontWeight?: TdFontWeight;
  fontFamily?: TdFontFamily;
  fontSize?: number; // Defaults to 12
  align?: TdAlign;
  verticalAlign?: TdVerticalAlign;
  lineHeight?: number;
  backgroundColor?: string | object;
  borderColor?: string; // Defaults to transparent
  borderWidth?: number;
  borderRadius?: number;
  padding?: number;
  shadowColor?: string; // Defaults to transparent
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  width?: number | string;
  height?: number | string;
  textBorderColor?: string; // Defaults to transparent
  textBorderWidth?: number;
  textShadowColor?: string; // Defaults to transparent
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
  /*
     * used to define rish text styles
     * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Rich%20Text
    */
  rich: object;
}
