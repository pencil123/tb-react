import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import ItemList from '../../../component/wx/ItemList';
import './recommend.css';

class Index extends Component {
  render() {
    return (
        <bs.Container fluid className="recommCon">
          <bs.Row className="recommTitle">每日优选</bs.Row>
          <ItemList/>
          <bs.Row>Buttom</bs.Row>
        </bs.Container>
    );
  }
}

export default Index;