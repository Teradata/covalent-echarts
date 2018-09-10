import { ITdTooltip, ITdXAxisConfig, ITdYAxisConfig, ITdScatterSeries } from '../';

interface ITdScatterConfig {
    xAxis?: ITdXAxisConfig[];
    yAxis?: ITdYAxisConfig[];
    series?: ITdScatterSeries[];
    tooltip?: ITdTooltip;
}

export { ITdScatterConfig };
