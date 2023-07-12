import { makeAutoObservable, reaction } from 'mobx';

export default class {
  session = null;

  constructor() {
    makeAutoObservable(this);
  }
}
