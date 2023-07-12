import ReactDOM from 'react-dom/client';
import { useRegisterSW } from 'virtual:pwa-register/react';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import '@/statics/styles/index.scss';
import App from '@/app';
import '@/shared/bootstrap';
import Provider from '@/shared/providers';
import VitePwaPromotion from '@jswork/vite-pwa-promotion';

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
  <Provider>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
    <VitePwaPromotion useRegisterSW={useRegisterSW} />
  </Provider>
);
