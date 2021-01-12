import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import WxCourse from './pages/wx/course';
import WxCoupon from './pages/wx/Coupon';
import WxRecommend from './pages/wx/recommend';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/wx/course" component={WxCourse}/>
            <Route path="/wx/coupon" component={WxCoupon}/>
            <Route path="/wx/recommend" component={WxRecommend}/>
            <Redirect to="/wx/course"/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;