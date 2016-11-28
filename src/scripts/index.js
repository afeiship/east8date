import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import Login from 'views/login/index';
import Dashbard from 'views/dashboard/index';
import User from 'views/user/index';
import UserList from 'views/user/list';
import Article from 'views/article/index';
import Option from 'views/option/index';
import Qa from 'views/qa/index';
import Tag from 'views/tag/index';
import App from 'views/app';

//and desing:
import 'antd/dist/antd.css';
import 'styles/app';

ReactDom.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashbard}/>
        <Route path="/user" component={User}>
          <IndexRoute component={UserList}/>
          <Route path="/user/(:page)" component={UserList}/>
        </Route>
        <Route path="/article" component={Article}/>
        <Route path="/option" component={Option}/>
        <Route path="/qa" component={Qa}/>
        <Route path="/tag" component={Tag}/>
      </Route>
      <Route path="/login" component={Login}/>
    </Router>,
    document.getElementById('index-app')
);
