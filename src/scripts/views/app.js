import {Row,Col} from 'antd';
import LeftMenu from 'components/LeftMenu';
import { Link } from 'react-router';

const imgLogo=require('images/ant-logo.svg');
export default class extends React.Component{
  render() {
    return (
      <div className="app-view">
        <Row className="hd" type="flex" align="middle">
          <Col span={24}>
            <Link to="/">
              <img width="40" src={imgLogo} />
              <span>React Ant Admin UI</span>
            </Link>
          </Col>
        </Row>
        <Row type="flex" className="bd">
            <Col className="left" span={6}>
              <LeftMenu />
            </Col>
            <Col className="right" span={18}>
               {this.props.children}
            </Col>
        </Row>
        <footer className="ft">
          Footer
        </footer>
      </div>
    )
  }
}
