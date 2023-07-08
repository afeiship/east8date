import { makeAutoObservable } from 'mobx';

export default class {
  static storeKey = '$';
  roles = [];
  privileges = [];
  selectedKeys = [];

  syncLocal(k, v) {
    this[k] = v;
    nx.$local.set(k, v);
  }

  constructor() {
    makeAutoObservable(this);
  }
}
