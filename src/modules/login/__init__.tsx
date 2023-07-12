import ReactFullImage from '@jswork/react-full-image';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { FormBuilder } from '@jswork/antd-form-builder';
import { header, meta, Container } from './_misc';

export default () => {
  const opts = {
    meta,
    caption: header,
    layout: 'vertical'
  } as any;

  const { mutateAsync, isLoading } = useMutation<Record<string, any>>({
    mutationFn: nx.$api.login
  });

  const handleFinish = async (e) => {
    const { value } = e.target;
    const res = await mutateAsync(value);
    // nx.$local.set('session', res);
    nx.$root.auth.session = res;
    nx.navigate('/admin');
  };

  return (
    <Container className="w-full h-[100vh]">
      <ReactFullImage
        animation="blur"
        src="https://tva1.js.work/large/e6c9d24egy1h5kk7oh4kaj21hw0u0aej.jpg"
      />
      <FormBuilder {...opts} onFinish={handleFinish}>
        <Button
          loading={isLoading}
          disabled={isLoading}
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
