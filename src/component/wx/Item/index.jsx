import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import testimg from '../../../assets/temp/test.jpg';
import './item.css';

class Index extends Component {
  render() {
    const {item_id,title,pict_url,zk_final_price,coupon_total_count,coupon_remain_count,coupon_info,coupon_start_fee,coupon_amount} = this.props;
    const now = 60;
    return (
        <bs.Row className="itemCon">
          <bs.Col>
            <bs.Image src={testimg} rounded className="itemImg"/>
          </bs.Col>
          <bs.Col>
            <div>
              <div className="itemTitle">{title}</div>
              <div className="itemLabel"><span>巍峨高山</span><span>静水深流</span>
              </div>
              <div className="itemProg">
                <bs.ProgressBar animated now={now} label={`剩余  ${now}%`}/>
              </div>
              <div className="item_price"><span
                  className="item_curprice">￥{zk_final_price - coupon_amount} / </span><span
                  className="item_oldprice">￥{zk_final_price}</span><span className="donow">| 立即行动</span>
              </div>
            </div>
          </bs.Col>
        </bs.Row>
    );
  }
}

export default Index;