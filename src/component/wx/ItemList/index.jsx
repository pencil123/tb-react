import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import testimg from '../../../assets/temp/test.jpg';
import './itemlist.css';

class Index extends Component {
  render() {
    return (
        <div className="itemlist">
          <bs.Row>
            <bs.Col>
              <bs.Image src={testimg} rounded className="itemImg" />
            </bs.Col>
            <bs.Col>
              <bs.Card style={{ width: '18rem' }}>
                <bs.Card.Header>环境是非常重要的资源，需要大家爱惜对待</bs.Card.Header>
                <bs.Card.Body>
                  <bs.Card.Title>这里是Title,字体会大一些</bs.Card.Title>
                  <bs.Card.Text>这里是文本内容，字体会小一些。</bs.Card.Text>
                </bs.Card.Body>
              </bs.Card>
            </bs.Col>
          </bs.Row>
        </div>
    );
  }
}

export default Index;