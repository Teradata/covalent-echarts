import * as echarts from 'echarts/lib/echarts';

import aquaSlash from '../themes/aqua-splash';
import aquaSlashDark from '../themes/aqua-splash-dark';

import californiaCoast from '../themes/california-coast';
import californiaCoastDark from '../themes/california-coast-dark';

import hawaiianSunrise from '../themes/hawaiian-sunrise';
import hawaiianSunriseDark from '../themes/hawaiian-sunrise-dark';

import passionFlower from '../themes/passion-flower';
import passionFlowerDark from '../themes/passion-flower-dark';

import razzleberryPie from '../themes/razzleberry-pie';
import razzleberryPieDark from '../themes/razzleberry-pie-dark';

import teradataClassic from '../themes/teradata-classic';
import teradataClassicDark from '../themes/teradata-classic-dark';

import teradataDefault from '../themes/teradata-default';
import teradataDefaultDark from '../themes/teradata-default-dark';

import urbanSunrise from '../themes/urban-sunrise';
import urbanSunriseDark from '../themes/urban-sunrise-dark';

import volcanicEruption from '../themes/volcanic-eruption';
import volcanicEruptionDark from '../themes/volcanic-eruption-dark';

/**
 * Function used to register a theme into echarts
 * Theme name and theme object needed as stated in
 * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.registerTheme
 */
export function registerTheme(themeName: string, theme: Object): void {
  echarts.registerTheme(themeName, theme);
}

/**
 * Function to register all default themes
 * @internal
 */
export function registerDefaultThemes(): void {
  function registerInternalTheme(themeObj: {themeName: string, theme: any}): void {
    registerTheme(themeObj.themeName, themeObj.theme);
  }
  registerInternalTheme(aquaSlash);
  registerInternalTheme(aquaSlashDark);

  registerInternalTheme(californiaCoast);
  registerInternalTheme(californiaCoastDark);

  registerInternalTheme(hawaiianSunrise);
  registerInternalTheme(hawaiianSunriseDark);

  registerInternalTheme(passionFlower);
  registerInternalTheme(passionFlowerDark);

  registerInternalTheme(razzleberryPie);
  registerInternalTheme(razzleberryPieDark);

  registerInternalTheme(teradataClassic);
  registerInternalTheme(teradataClassicDark);

  registerInternalTheme(teradataDefault);
  registerInternalTheme(teradataDefaultDark);

  registerInternalTheme(urbanSunrise);
  registerInternalTheme(urbanSunriseDark);

  registerInternalTheme(volcanicEruption);
  registerInternalTheme(volcanicEruptionDark);
}
