import React from 'react';
import ReactDom from 'react-dom';

import { Row, Col,Card } from 'antd';
import LeftMenu from 'components/LeftMenu';

export default class HomeApp extends React.Component {
  render() {
    return (
      <Row className="home-view">
          <Col className="left" span={6}>
            <Card title="管理员信息" bordered=false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <LeftMenu />
          </Col>
          <Col className="right" span={18}>col-18</Col>
      </Row>
    )
  }
}
