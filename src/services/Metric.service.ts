import { Metric } from '../@types';
import Service from '../Service';
import generateQueryString from '../utils/generateQueryString';

class MetricService extends Service {
  static getTop3Tags() {
    return this.Http.get<Metric.EditorTagRatio>(
      '/metrics/editor/top3-tags'
    ).then(this.getData);
  }

  static getEditorMonthlyEarnings(yearMonth?: string) {
    const queryString = generateQueryString({ yearMonth: yearMonth });
    return this.Http.get<Metric.EditorMonthlyEarnings>(
      `/metrics/editor/monthly-earnings${queryString}`
    ).then(this.getData);
  }

  static getMonthlyRevenuesExpenses(yearMonth: string) {
    const queryString = generateQueryString({ yearMonth: yearMonth });
    return this.Http.get<Metric.MonthlyRevenuesExpenses>(
      `/metrics/monthly-revenues-expenses${queryString}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(this.getData);
  }

  static getMonthlyRevenuesExpensesChartJs(yearMonth: string) {
    const queryString = generateQueryString({ yearMonth: yearMonth });
    return this.Http.get<Metric.MonthlyRevenuesExpensesChartjs>(
      `/metrics/monthly-revenues-expenses${queryString}`,
      {
        headers: {
          'Content-Type': 'application/vnd.alganews.chartjs+json',
        },
      }
    ).then(this.getData);
  }
}

export default MetricService;
