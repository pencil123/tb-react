import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import Item from '../../../component/wx/Item';
import './recommend.css';
import youxuanimg from "../../../assets/imgs/youxuan.png";
import axios from "axios";

class Index extends Component {
  state = {
    items:[],
    err:''
  }
  componentDidMount() {
    document.title = "优惠券推荐";
    axios.get("/wxapi/itemresp?searchid=" + this.props.location.hash.substr(1)).then(
        response => {
          console.log('成功了',response.data);
          this.setState({items:response.data});
        },
        error => {console.log('失败了',error);}
    )
  }
  render() {
    return (
        <bs.Container fluid className="recommCon">
          <bs.Row className="recommTitle">
            <bs.Image src={youxuanimg} rounded/>
          </bs.Row>
          <div className="itemlist">
            {
              this.state.items.map(
                  item => {
                    return <Item item={item} key={item.itemId}/>
                  }
              )
            }
          </div>
          <bs.Row className="itemfooter">
            <span className="footercontent">我也是有底线地</span>
          </bs.Row>
        </bs.Container>
    );
  }
}

export default Index;