import React from 'react';
import ReactDom from 'react-dom';

import { DatePicker } from 'antd';


export default class ListApp extends React.Component {
  render() {
    return (
      <div className="list">
        <DatePicker />
      </div>
    )
  }
}
