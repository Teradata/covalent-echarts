import { ITdTooltip, ITdLineSeries, ITdXAxisConfig, ITdYAxisConfig } from '../';

interface ITdLineConfig {
    xAxis?: ITdXAxisConfig[];
    yAxis?: ITdYAxisConfig[];
    series?: ITdLineSeries[];
    tooltip?: ITdTooltip;
}

export { ITdLineConfig };
