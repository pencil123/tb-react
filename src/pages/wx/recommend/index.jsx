import React, {Component} from 'react';
import * as bs from "react-bootstrap";

import ItemList from '../../../component/wx/ItemList';
import './recommend.css';
import youxuanimg from "../../../assets/imgs/youxuan.png";

class Index extends Component {
    render() {
        return (
            <bs.Container fluid className="recommCon">
                <bs.Row className="recommTitle">
                    <bs.Image src={youxuanimg} rounded/>
                </bs.Row>
                <ItemList/>
                <bs.Row className="itemfooter">
                    <span className="footercontent">我也是有底线地</span>
                </bs.Row>
            </bs.Container>
        );
    }
}

export default Index;