import { ITdTooltip, ITdBarSeries, ITdXAxisConfig, ITdYAxisConfig } from '../';

interface ITdBarConfig {
    xAxis?: ITdXAxisConfig[];
    yAxis?: ITdYAxisConfig[];
    series?: ITdBarSeries[];
    tooltip?: ITdTooltip;
    data?: any[];
}

export { ITdBarConfig };
