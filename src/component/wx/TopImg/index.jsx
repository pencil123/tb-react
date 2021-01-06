import React, {Component} from 'react';
import * as bs from 'react-bootstrap';
import './topimg.css';

class Index extends Component {
  render() {
    return (
        <div className="topimg">
          <bs.Image src="http://img.taobao71.com/bao/uploaded/i4/3518339917/O1CN015IRe1r2N82MsfvNC6_!!0-item_pic.jpg_300x300.jpg" rounded />
        </div>
    );
  }
}

export default Index;