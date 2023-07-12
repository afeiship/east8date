import '@jswork/next-admin-kits';
import * as AcComponents from '@jswork/antd-components';
import { QueryClient } from '@tanstack/react-query';
import { installWidgets } from '@jswork/antd-form-builder';
import '@/shared/services/api';

const queryClient = new QueryClient();

// AcComponents.AcSelect.defaultProps.kv = KV_NAME_PAIRS;
// AcComponents.AcTree.defaultProps.kv = KV_NAME_PAIRS;

installWidgets(AcComponents);

nx.AdminKits.create({ prefix: 'nak' });
nx.sets({ $client: queryClient });
