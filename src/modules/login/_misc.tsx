import styled, { css } from 'styled-components';

export const meta = {
  formItemLayout: {},
  fields: [
    {
      key: 'username',
      label: '用户名',
      widgetProps: {
        placeholder: '请输入用户名',
        autoComplete: 'off'
      },
      required: true
    },
    {
      key: 'password',
      label: '密码',
      widget: 'password',
      widgetProps: {
        placeholder: '请输入密码',
        autoComplete: 'off'
      },
      required: true
    }
  ]
};

export const Container = styled.section`
  .ant-form {
    user-select: none;
    width: 500px;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
    box-shadow: rgb(0 0 0 / 16%) 0 3px 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledImg = styled.img`
  width: 80px;
`;

export const header = (
  <header className="text-center relative z-10 rounded overflow-hidden">
    <StyledImg
      src="https://tva1.js.work/small/e6c9d24egy1h5kk1mvwn9j20n40n2gmv.jpg"
      alt="logo child"
    />
  </header>
);
