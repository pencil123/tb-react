import './App.css';
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import * as bs from 'react-bootstrap';
import axios from "axios";

import WxTopImg from './component/wx/TopImg';
import WxCenterTpwd from './component/wx/CenterTpwd';
import WxContent from './component/wx/Content';
import WxFooter from './component/wx/Footer';

class App extends Component {
    state = {
        title:'',
        pict_url:'',
        tpwd:''
    }
    componentDidMount() {
       axios.get("/wxapi/couponresp?itemid=" + this.props.location.hash.substr(1)).then(
            response => {
                console.log('成功了',response.data);
                this.setState({title:response.data.title,pict_url:response.data.pict_url,tpwd:response.data.tpwd});
            },
            error => {console.log('失败了',error);}
        )
    }


  render() {
    return (
        <bs.Container fluid>
          <bs.Row>
            <WxTopImg pict_url={this.state.pict_url}/>
          </bs.Row>
          <bs.Row>
            <WxCenterTpwd tpwd={this.state.tpwd} />
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


App = withRouter(App);

export default App;