import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from '@jswork/react-mobxer';
import viteRequireContext from '@jswork/vite-require-context';

const moduleFiles = import.meta.glob('@/shared/stores/*.ts', { eager: true });
const context = viteRequireContext(moduleFiles);

export default ({ children }: any) => {
  return (
    <HashRouter>
      <QueryClientProvider client={nx.$client}>
        <ConfigProvider
          context={context}
          inject={(e) => {
            const { $, ...stores } = e;
            nx.$root = $;
            nx.mix(nx.$root, stores);
          }}>
          {children}
        </ConfigProvider>
      </QueryClientProvider>
    </HashRouter>
  );
};
