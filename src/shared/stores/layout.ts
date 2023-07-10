import { makeAutoObservable } from 'mobx';

export default class {
  collapsed = nx.$local.get('collapsed');

  // todo: sync-local need to be in root common
  syncLocal(k, v) {
    this[k] = v;
    nx.$local.set(k, v);
  }

  constructor() {
    makeAutoObservable(this);
  }
}
