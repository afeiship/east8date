import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import Login from 'views/login/index';
import Dashbard from 'views/dashboard/index';
//user module:
import User from 'views/user/index';
import UserList from 'views/user/list';
import UserEdit from 'views/user/edit';
import UserAdd from 'views/user/add';

//option module:
import Option from 'views/option/index';
import OptionList from 'views/option/list';
import OptionEdit from 'views/option/edit';
import OptionAdd from 'views/option/add';

//tag module:
import Tag from 'views/tag/index';
import TagList from 'views/tag/list';
import TagEdit from 'views/tag/edit';
import TagAdd from 'views/tag/add';

import Article from 'views/article/index';
import Qa from 'views/qa/index';
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
          <Route path="/user/page/(:page)" component={UserList}/>
          <Route path="/user/edit/:user_id" component={UserEdit}/>
          <Route path="/user/add" component={UserAdd}/>
        </Route>
        <Route path="/option" component={Option}>
          <IndexRoute component={OptionList}/>
          <Route path="/option/page/(:page)" component={OptionList}/>
          <Route path="/option/edit/:option_id" component={OptionEdit}/>
          <Route path="/option/add" component={OptionAdd}/>
        </Route>

        <Route path="/tag" component={Tag}>
          <IndexRoute component={TagList}/>
          <Route path="/tag/page/(:page)" component={TagList}/>
          <Route path="/tag/edit/:tag_id" component={TagEdit}/>
          <Route path="/tag/add" component={TagAdd}/>
        </Route>

        <Route path="/article" component={Article}/>

        <Route path="/qa" component={Qa}/>
      </Route>
      <Route path="/login" component={Login}/>
    </Router>,
    document.getElementById('index-app')
);
