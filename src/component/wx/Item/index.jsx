import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import testimg from '../../../assets/temp/test.jpg';
import './item.css';

class Index extends Component {
  render() {
    const {item_id, title, pict_url, zk_final_price, coupon_total_count, coupon_remain_count, coupon_info, coupon_start_fee, coupon_amount} = this.props.item;
    const now = Math.round(coupon_remain_count / coupon_total_count * 10000)
        / 100.00;
    return (
        <bs.Row className="itemCon">
          <bs.Col>
            <a href={"/wx/coupon/#" + item_id}>
              <bs.Image src={testimg} rounded className="itemImg"/>
            </a>
          </bs.Col>
          <bs.Col>
            <div>
              <a href={"/wx/coupon/#" + item_id}>
                <div className="itemTitle">{title}</div>
              </a>
              <div className="itemLabel"><span>{coupon_info}</span>
              </div>
              <div className="itemProg">
                <bs.ProgressBar animated now={now} label={`剩余  ${now}%`}/>
              </div>
              <div className="item_price">
                <a href={"/wx/coupon/#" + item_id}>
                <span
                    className="item_curprice">￥{zk_final_price
                - coupon_amount} / </span><span
                    className="item_oldprice">￥{zk_final_price}</span><span
                    className="donow">| 立即行动</span>
                </a>
              </div>
            </div>
          </bs.Col>
        </bs.Row>
    );
  }
}

export default Index;