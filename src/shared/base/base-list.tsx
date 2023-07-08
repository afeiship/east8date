import { ReactAntCurdTable } from '@jswork/react-ant-abstract-curd';

export class BaseList extends ReactAntCurdTable {
  module = 'admin';
  size = 'middle';
  apiService = nx.$api;
  eventService = nx.$event;
  routeService = {
    push: (to) => nx.navigate(to),
    replace: (to) => nx.navigate(to, { replace: true })
  };

  get options() {
    const { keywords } = this.qs;
    return { keywords };
  }
}
