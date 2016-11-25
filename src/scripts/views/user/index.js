import { Link } from 'react-router';
import 'whatwg-fetch';

export default class extends React.Component {
  fetchData() {
    fetch('http://www.fakee.com/index.php/user?id=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'x-www-form-urlencoded'
      }
    }).then(function(data) {
      console.log('request succeeded with JSON response', data)
    }).catch(function(error) {
      console.log('request failed', error)
    });
  }
  render() {
    this.fetchData();
    return (
      <div className="user-view">
        <table width="100%" className="action-table">
          <thead>
            <tr>
              <td>ID</td>
              <td>用户名</td>
              <td>显示名</td>
              <td>创建时间</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11</td>
              <td>11</td>
              <td>11</td>
              <td>11</td>
              <td>
                <a href="#">编辑</a> |
                <a href="#">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
