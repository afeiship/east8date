import ReactFullImage from '@jswork/react-full-image';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { FormBuilder } from '@jswork/antd-form-builder';
import { header, meta, Container } from './_misc';
import { useState } from 'react';

export default () => {
  const opts = {
    meta,
    caption: header,
    layout: 'vertical'
  } as any;

  const [loading, setLoading] = useState(false);

  const handleFinish = async (e) => {
    const { value } = e.target;
    setLoading(true);
    const res = await nx.$api.login(value);
    nx.$local.set('token', res.token);
    nx.navigate('/admin');
    setLoading(false);
  };

  return (
    <Container className="w-full h-[100vh]">
      <ReactFullImage
        animation="blur"
        src="https://tva1.js.work/large/e6c9d24egy1h5kk7oh4kaj21hw0u0aej.jpg"
      />
      <FormBuilder {...opts} onFinish={handleFinish}>
        <Button
          loading={loading}
          disabled={loading}
          className="w-full mb-4"
          htmlType="submit"
          size="large"
          type="primary">
          <LoginOutlined />
          登录
        </Button>
      </FormBuilder>
    </Container>
  );
};

export const Routes = {
  path: '/'
};
