import { Link } from 'react-router';
import http from 'services/http';

export default class extends React.Component {
  fetchData() {
    return http.GET('/user',{
      data:{
        id:1
      },
      success:function(inResp) {
        console.log(inResp);
      }
    })
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
