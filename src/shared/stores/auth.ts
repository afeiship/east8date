import { makeAutoObservable, reaction } from 'mobx';

export default class {
  session = null;

  constructor() {
    makeAutoObservable(this);

    // reaction watch session change
    reaction(
      () => this.session,
      (session, prevSession) => {
        if (session === null) {
          nx.$local.del('session');
        } else {
          nx.$local.set('session', session);
        }
      }
    );
  }
}
