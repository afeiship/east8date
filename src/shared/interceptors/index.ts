import Auth from './request/auth';
import BusError from './response/bus-error';
import Business from './response/business';
import Error from './error/common';
import jzyunqiInterceptors from '@jswork/jzyunqi-interceptors';

export const interceptors = [
  { type: 'request', fn: Auth },
  { type: 'response', fn: BusError },
  { type: 'response', fn: Business },
  { type: 'error', fn: Error },
  ...jzyunqiInterceptors
];