import httpSchema from '@jswork/http-schema';
import '@jswork/next-axios';
import { interceptors } from '@/shared/interceptors';
import schema from './schema';

const options = {
  adapter: 'Axios',
  interceptors,
  transformResponse: (res) => nx.get(res, 'data.data')
};

export default httpSchema(schema, options);
