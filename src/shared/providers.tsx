import { HashRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

export default ({ children }: any) => {
  return (
    <HashRouter>
      <QueryClientProvider client={nx.$client}>{children}</QueryClientProvider>
    </HashRouter>
  );
};
