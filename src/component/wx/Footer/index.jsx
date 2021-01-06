import React, {Component} from 'react';
import * as bs from 'react-bootstrap';

import Toast from "react-common-toast";

import './wxfooter.css';

class Index extends Component {

  appleCopy = () => {
    const targetDiv = document.getElementById("tpwd");
    const range = document.createRange();
    range.selectNodeContents(targetDiv);
    window.getSelection().addRange(range);
    const tag = document.execCommand("Copy");
    if (tag) {
      Toast.info("复制成功",2000,() => {
        console.log('回调方法')
      });
    }
  }

  render() {
    return (
        <div className="wxFooter">
          <bs.ButtonGroup>
            <bs.Button variant="danger" onClick={this.appleCopy}>一键复制口令</bs.Button>
            <bs.Button variant="success" onClick={this.appleCopy}>苹果手机复制</bs.Button>
          </bs.ButtonGroup>
        </div>
    );
  }
}

export default Index;