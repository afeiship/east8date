import { ReactAntCurdTree } from '@jswork/react-ant-abstract-curd';

export class BaseTree extends ReactAntCurdTree {
  module = 'admin';
  size = 'middle';
  rowKey = 'value';
  apiService = nx.$api;
  eventService = nx.$event;
  routeService = {
    push: (to) => nx.navigate(to),
    replace: (to) => nx.navigate(to, { replace: true })
  };

  dataDidLoad(inResponse: any): any {
    return nx.keyMap(inResponse, {
      id: 'value',
      name: 'label'
    });
  }
}
