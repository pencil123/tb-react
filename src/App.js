import './App.css';
import React, {Component} from 'react';
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom'

import WxCourse from './pages/wx/course';
import WxCoupon from './pages/wx/Coupon';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/wx/course" component={WxCourse}/>
                <Route path="/wx/coupon" component={WxCoupon}  />
                <Redirect to="/wx/course"/>
            </Switch>
        </BrowserRouter>
    );
  }
}
export default App;