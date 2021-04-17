import React, {Component} from 'react';
import axios from "axios";
import * as bs from 'react-bootstrap';


import WxCouponComp from '../../../component/wx/CouponComp/'

class Index extends Component {
    state = {
        title:'',
        pictUrl:'',
        tpwd:''
    }
    componentDidMount() {
        document.title = "优惠券推荐";
        axios.get("/wxapi/couponresp?itemid=" + this.props.location.hash.substr(1)).then(
            response => {
                console.log('成功了',response.data);
                this.setState({title:response.data.title,pictUrl:response.data.pictUrl,tpwd:response.data.tpwd});
            },
            error => {console.log('失败了',error);}
        )
    }

    render() {
        return (
            <bs.Container fluid>
                <WxCouponComp pictUrl={this.state.pictUrl} tpwd={this.state.tpwd} />
            </bs.Container>
        );
    }
}

export default Index;