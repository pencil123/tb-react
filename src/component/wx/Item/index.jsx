import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import './item.css';

class Index extends Component {
  render() {
    const {itemId, title, pictUrl, zkFinalPrice, couponTotalCount, couponRemainCount, couponInfo, couponStartFee, couponAmount} = this.props.item;
    const now = Math.round(couponRemainCount / couponTotalCount * 10000)  / 100.00;
    const finalPrice = Math.round((zkFinalPrice - couponAmount) * 100) / 100.00;
    return (
        <bs.Row className="itemCon">
          <bs.Col>
            <a href={"/wx/coupon/#" + itemId}>
              <bs.Image src={pictUrl} rounded className="itemImg"/>
            </a>
          </bs.Col>
          <bs.Col className="itemInfo">
            <div>
              <a href={"/wx/coupon/#" + itemId}>
                <div className="itemTitle">{title}</div>
              </a>
              <div className="itemLabel"><span>{couponInfo}</span>
              </div>
              <div className="itemProg">
                <bs.ProgressBar animated now={now} label={`剩余  ${now}%`}/>
              </div>
              <div className="item_price">
                <a href={"/wx/coupon/#" + itemId}>
                <span
                    className="item_curprice">￥{finalPrice} / </span><span
                    className="item_oldprice">￥{zkFinalPrice}</span><span
                    className="donow">| 购买</span>
                </a>
              </div>
            </div>
          </bs.Col>
        </bs.Row>
    );
  }
}

export default Index;