import React, {Component} from 'react';
import axios from "axios";
import * as bs from 'react-bootstrap';


import WxCouponComp from '../../../component/wx/CouponComp/'

class Index extends Component {
    state = {
        title:'',
        pict_url:'',
        tpwd:''
    }
    componentDidMount() {
        document.title = "优惠券推荐";
        axios.get("/wxapi/couponresp?itemid=" + this.props.location.hash.substr(1)).then(
            response => {
                console.log('成功了',response.data);
                this.setState({title:response.data.title,pict_url:response.data.pict_url,tpwd:response.data.tpwd});
            },
            error => {console.log('失败了',error);}
        )
    }

    render() {
        return (
            <bs.Container fluid>
                <WxCouponComp pict_url={this.state.pict_url} tpwd={this.state.tpwd} />
            </bs.Container>
        );
    }
}

export default Index;