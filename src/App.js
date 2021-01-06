import './App.css';
import React, {Component} from 'react';
import * as bs from 'react-bootstrap';

import WxTopImg from './component/wx/TopImg';
import WxCenterTpwd from './component/wx/CenterTpwd';
import WxContent from './component/wx/Content';
import WxFooter from './component/wx/Footer';


class App extends Component {
  render() {
    return (
        <bs.Container fluid>
          <bs.Row>
            <WxTopImg/>
          </bs.Row>
          <bs.Row>
            <WxCenterTpwd/>
          </bs.Row>
          <bs.Row>
            <WxContent/>
          </bs.Row>
          <bs.Row>
            <WxFooter/>
          </bs.Row>
        </bs.Container>
    );
  }
}

export default App;