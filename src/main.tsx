import ReactDOM from 'react-dom/client';
import StateProvider from '@jswork/react-tiny-state';
import { useRegisterSW } from 'virtual:pwa-register/react';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import App from '@/app';
import Provider from '@/shared/providers';
import stores from '@/shared/stores';
import VitePwaPromotion from '@jswork/vite-pwa-promotion';
import '@/assets/styles/index.scss';
import '@/shared/bootstrap';

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
  <Provider>
    <StateProvider store={stores}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </StateProvider>
    <VitePwaPromotion useRegisterSW={useRegisterSW} />
  </Provider>
);
