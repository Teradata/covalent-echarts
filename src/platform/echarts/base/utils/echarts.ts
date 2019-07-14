import * as echarts from 'echarts/lib/echarts';

import aquaSlash from '../themes/aqua-splash.json';
import aquaSlashDark from '../themes/aqua-splash-dark.json';

import californiaCoast from '../themes/california-coast.json';
import californiaCoastDark from '../themes/california-coast-dark.json';

import hawaiianSunrise from '../themes/hawaiian-sunrise.json';
import hawaiianSunriseDark from '../themes/hawaiian-sunrise-dark.json';

import passionFlower from '../themes/passion-flower.json';
import passionFlowerDark from '../themes/passion-flower-dark.json';

import razzleberryPie from '../themes/razzleberry-pie.json';
import razzleberryPieDark from '../themes/razzleberry-pie-dark.json';

import teradataClassic from '../themes/teradata-classic.json';
import teradataClassicDark from '../themes/teradata-classic-dark.json';

import teradataDefault from '../themes/teradata-default.json';
import teradataDefaultDark from '../themes/teradata-default-dark.json';

import urbanSunrise from '../themes/urban-sunrise.json';
import urbanSunriseDark from '../themes/urban-sunrise-dark.json';

import volcanicEruption from '../themes/volcanic-eruption.json';
import volcanicEruptionDark from '../themes/volcanic-eruption-dark.json';

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
