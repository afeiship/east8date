import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import Login from 'views/login/index';
import Dashbard from 'views/dashboard/index';
import User from 'views/user/index';
import Article from 'views/article/index';
import System from 'views/system/index';
import App from 'views/app';

//and desing:
import 'antd/dist/antd.css';
import 'styles/app';

ReactDom.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashbard}/>
        <Route path="/user" component={User}/>
        <Route path="/article" component={Article}/>
        <Route path="/system" component={System}/>
      </Route>
      <Route path="/login" component={Login}/>
    </Router>,
    document.getElementById('index-app')
);
