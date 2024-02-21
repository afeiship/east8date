import httpSchema from '@jswork/http-schema';
import '@jswork/next-axios';
import { interceptors } from '@/shared/interceptors';
import schema from './schema';

const options = {
  adapter: 'Axios',
  harmony: true,
  interceptors,
  transformResponse: (res) => nx.get(res, 'data.data')
};

httpSchema(schema, options);
