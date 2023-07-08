import { $api } from '@/shared/services';
import '@jswork/next-admin-kits';
import * as AcComponents from '@jswork/antd-components';
import { installWidgets } from '@jswork/antd-form-builder';
import { KV_NAME_PAIRS } from '@/shared/constants';

// AcComponents.AcSelect.defaultProps.kv = KV_NAME_PAIRS;
// AcComponents.AcTree.defaultProps.kv = KV_NAME_PAIRS;

installWidgets(AcComponents);

nx.AdminKits.create({ prefix: 'nak' });
nx.sets({ $api });
