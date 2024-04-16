import { AnalyticsModule } from './analytics.module';

describe('AnalyticsModule', () => {
  const module: AnalyticsModule = new AnalyticsModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
