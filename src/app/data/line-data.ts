import {
  ITdSeriesTooltip,
  ITdAxisLabel,
  ITdAxisLine,
  ITdSplitLine,
} from '../../platform/echarts';

const NOW: Date = new Date();

const seriesLineToolTip: any[] = [
];

const splitLine: ITdSplitLine = {
};

const seriesToolTip: ITdSeriesTooltip[] = [
  {
    textStyle: {
    },
    // formatter: ' inline Label {a}: {c0}',
  }, {
    textStyle: {
    },
    // formatter: 'inline Label {a}: {c0}',
  },
];

const xAxisLabel: ITdAxisLabel = {
  show: true,
  inside: false,
  fontStyle: 'italic',
  fontWeight: 'bold',
};

const yAxisLabel: ITdAxisLabel = {
  show: true,
  inside: false,
  fontStyle: 'italic',
  fontWeight: 'bold',
  formatter: '${value}',
};

const yLine: ITdAxisLine = {
  show: true,
};

const xLine: ITdAxisLine = {
  show: true,
};

export {
  splitLine,
  seriesLineToolTip,
  seriesToolTip,
  xAxisLabel,
  yAxisLabel,
  yLine,
  xLine,
};
