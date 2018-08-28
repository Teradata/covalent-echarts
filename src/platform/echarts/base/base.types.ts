type TdNameLocation = 'start' | 'middle' | 'center' | 'end';

type TdAxisType = 'value' | 'category' | 'time' | 'log';

type TdAxisLineType = 'solid' | 'dashed' | 'dotted';

type TdPosition = 'left' | 'right';

type TdAlign = 'left' | 'center' | 'right';

type TdfontStyle = 'normal' | 'italic' | 'oblique';

type TdFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter';

type TdVerticalAlign = 'top' | 'middle' | 'bottom' | 'center';

type TdShowLabel = true | false | null;

type TdPointerType = 'line' | 'shadow';

type TdFontFamily =  'sans-serif' | 'serif' | 'monospace'; // TODO test other options

type TdStatus = 'show' | 'hide';

export {
  TdNameLocation,
  TdAxisType,
  TdPosition,
  TdAlign,
  TdfontStyle,
  TdFontWeight,
  TdVerticalAlign,
  TdShowLabel,
  TdFontFamily,
  TdPointerType,
  TdStatus,
  TdAxisLineType,
};
