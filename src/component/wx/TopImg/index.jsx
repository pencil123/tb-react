import React, {Component} from 'react';
import * as bs from 'react-bootstrap';
import './topimg.css';

class Index extends Component {
  render() {
    return (
        <div className="topimg">
          <bs.Image src={`${this.props.pict_url}`} rounded />              {this.props.tpwd}
        </div>
    );
  }
}

export default Index;