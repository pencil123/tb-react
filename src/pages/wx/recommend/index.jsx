import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import Item from '../../../component/wx/Item';
import './recommend.css';
import youxuanimg from "../../../assets/imgs/youxuan.png";

class Index extends Component {
  render() {
    return (
        <bs.Container fluid className="recommCon">
          <bs.Row className="recommTitle">
            <bs.Image src={youxuanimg} rounded/>
          </bs.Row>
          <div className="itemlist">
            <Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item />
          </div>
          <bs.Row className="itemfooter">
            <span className="footercontent">我也是有底线地</span>
          </bs.Row>
        </bs.Container>
    );
  }
}

export default Index;