import { Button, Layout, Menu, Row, Space, message } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { obs } from '@jswork/react-mobxer';
import { Logo } from '@/shared/components/logo';
import { Footer } from '@/shared/components/footer';
import { GLOBAL_MENUS } from '@/shared/constants';
import { Breadcrumbs } from '@/shared/components/breadcrumb';
import ReactAntConfirm from '@jswork/react-ant-confirm';
import { getActiveKeys } from '@/shared/helpers';

const { Content, Sider } = Layout;

export default obs(() => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { collapsed } = nx.$root.layout;
  const pathname = location.hash.slice(1);
  const activeKeys = getActiveKeys(pathname);

  const handleFlush = async () => {
    setLoading(true);
    await nx.$api.flush();
    message.success('🚀 Flush success');
    setLoading(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => {
          nx.$root.layout.syncLocal('collapsed', value);
        }}>
        <Logo />
        <Menu
          theme="dark"
          selectedKeys={activeKeys}
          mode="inline"
          items={GLOBAL_MENUS}
          onClick={(e) => navigate(e.key)}
        />
      </Sider>
      <Layout className="site-layout bg-white">
        <Row style={{ padding: '10px 16px' }} align="middle" justify="space-between">
          <Breadcrumbs />
          <Space>
            <Button disabled={loading} loading={loading} size="small" onClick={handleFlush}>
              🎯 Flush
            </Button>
            <ReactAntConfirm onClick={() => navigate('/')}>
              <Button size="small" icon={<span className="mr-1">🎱</span>}>
                注销
              </Button>
            </ReactAntConfirm>
          </Space>
        </Row>
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
});
