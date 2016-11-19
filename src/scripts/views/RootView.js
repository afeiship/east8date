import { Router, Route, hashHistory } from 'react-router';
import HomeApp from './home/index';
import DetailApp from './detail/index';
import ListApp from './list/index';
import LoginApp from './login/index';

export default class RootView extends React.Component{
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/home" component={HomeApp}/>
        <Route path="/list" component={ListApp}/>
        <Route path="/detail" component={DetailApp}/>
        <Route path="/login" component={LoginApp}/>
      </Router>
    )
  }
}
