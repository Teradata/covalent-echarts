import { ChartDocsModule } from './chart-docs.module';

describe('ChartDocsModule', () => {
  let chartDocsModule: ChartDocsModule;

  beforeEach(() => {
    chartDocsModule = new ChartDocsModule();
  });

  it('should create an instance', () => {
    expect(chartDocsModule).toBeTruthy();
  });
});
