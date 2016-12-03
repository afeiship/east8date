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

//cate module:
import Cate from 'views/cate/index';
import CateList from 'views/cate/list';
import CateEdit from 'views/cate/edit';
import CateAdd from 'views/cate/add';


//attachment module:
import Image from 'views/image/index';
import ImageList from 'views/image/list';
import ImageEdit from 'views/image/edit';
import ImageAdd from 'views/image/add';


//Qa module:
import Qa from 'views/qa/index';
import QaList from 'views/qa/list';
import QaEdit from 'views/qa/edit';
import QaAdd from 'views/qa/add';


//Article module:
import Article from 'views/article/index';
import ArticleList from 'views/article/list';
import ArticleEdit from 'views/article/edit';
import ArticleAdd from 'views/article/add';


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

        <Route path="/cate" component={Cate}>
          <IndexRoute component={CateList}/>
          <Route path="/cate/page/(:page)" component={CateList}/>
          <Route path="/cate/edit/:cate_id" component={CateEdit}/>
          <Route path="/cate/add" component={CateAdd}/>
        </Route>

        <Route path="/image" component={Image}>
          <IndexRoute component={ImageList}/>
          <Route path="/image/page/(:page)" component={ImageList}/>
          <Route path="/image/edit/:image_id" component={ImageEdit}/>
          <Route path="/image/add" component={ImageAdd}/>
        </Route>

        <Route path="/qa" component={Qa}>
          <IndexRoute component={QaList}/>
          <Route path="/qa/page/(:page)" component={QaList}/>
          <Route path="/qa/edit/:qa_id" component={QaEdit}/>
          <Route path="/qa/add" component={QaAdd}/>
        </Route>

        <Route path="/article" component={Article}>
          <IndexRoute component={ArticleList}/>
          <Route path="/article/page/(:page)" component={ArticleList}/>
          <Route path="/article/edit/:article_id" component={ArticleEdit}/>
          <Route path="/article/add" component={ArticleAdd}/>
        </Route>
      </Route>
      <Route path="/login" component={Login}/>
    </Router>,
    document.getElementById('index-app')
);
