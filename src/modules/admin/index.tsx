import { Row, Space, Divider } from 'antd';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width: 80%;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 200px;
  }

  > p {
    color: #999;
  }
`;

export default () => {
  return (
    <Container>
      <p className="text-5xl">⏰</p>
      <p>期待中，先看看其它栏目?...</p>
      <Space split={<Divider type="vertical" />}>
        <NavLink to="/admin/products">Products</NavLink>
        <NavLink to="/admin/backend-cates">BackendCates</NavLink>
        <NavLink to="/admin/frontend-cates">FrontendCates</NavLink>
        <NavLink to="/admin/users">Users</NavLink>
        <NavLink to="/admin/roles">Roles</NavLink>
      </Space>
    </Container>
  );
};
