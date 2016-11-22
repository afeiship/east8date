import React from 'react';
import ReactDom from 'react-dom';

import { Row, Col,Card } from 'antd';
import LeftMenu from 'components/LeftMenu';

export default class HomeApp extends React.Component {
  render() {
    return (
      <div className="home-view">
        <Row className="hd" type="flex" align="middle">
          <Col span={24}>Header</Col>
        </Row>
        <Row type="flex" className="bd">
            <Col className="left" span={6}>
              <LeftMenu />
            </Col>
            <Col className="right" span={18}>col-18</Col>
        </Row>
        <footer className="ft">
          Footer
        </footer>
      </div>
    )
  }
}
