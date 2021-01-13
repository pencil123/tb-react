import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import testimg from '../../../assets/temp/test.jpg';
import './itemlist.css';

class Index extends Component {
  render() {
    const now = 60;
    return (
        <div className="itemlist">
          <bs.Row className="itemCon">
            <bs.Col>
              <bs.Image src={testimg} rounded className="itemImg" />
            </bs.Col>
            <bs.Col>
              <div>
                <div className="itemTitle">环境是非常重要的资源，需要大家爱惜对待</div>
                <div className="itemLabel"><span>巍峨高山</span><span>静水深流</span></div>
                <div className="itemProg"><bs.ProgressBar animated now={now} label={`剩余  ${now}%`} /></div>
                <div className="item_price"><span className="item_curprice">￥99 / </span><span className="item_oldprice">￥199</span><span className="donow">| 立即行动</span></div>
              </div>
            </bs.Col>
          </bs.Row>

          <bs.Row className="itemCon">
            <bs.Col>
              <bs.Image src={testimg} rounded className="itemImg" />
            </bs.Col>
            <bs.Col>
              <div>
                <div className="itemTitle">环境是非常重要的资源，需要大家爱惜对待</div>
                <div className="itemLabel"><span>巍峨高山</span><span>静水深流</span></div>
                <div className="itemProg"><bs.ProgressBar animated now={now} label={`剩余  ${now}%`} /></div>
                <div className="item_price"><span className="item_curprice">￥99 / </span><span className="item_oldprice">￥199</span><span className="donow">| 立即行动</span></div>
              </div>
            </bs.Col>
          </bs.Row>
        </div>
    );
  }
}

export default Index;