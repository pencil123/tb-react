import React, {Component} from 'react';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css";
import "./course.css";
import img1 from '../../../assets/imgs/1.png';
import img2 from '../../../assets/imgs/2.png';
import img3 from '../../../assets/imgs/3.png';
import img4 from '../../../assets/imgs/4.png';
import img5 from '../../../assets/imgs/5.png';
import img6 from '../../../assets/imgs/6.png';
import img7 from '../../../assets/imgs/7.png';

class Index extends Component {
    componentDidMount(){
        document.title = "淘宝省钱教程";
        new Swiper ('.swiper-container', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            height : window.innerHeight,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="course_content">
                            <div className="swiper-title">淘宝天猫领券 1/7</div>
                            <img alt='1' src={img1}/></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="course_content">
                            <div className="swiper-title">淘宝天猫领券 2/7</div>
                            <img alt='2' src={img2}/></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="course_content">
                            <div className="swiper-title">淘宝天猫领券 3/7</div>
                            <img alt='3' src={img3}/></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="course_content">
                            <div className="swiper-title">淘宝天猫领券 4/7</div>
                            <img alt='4' src={img4}/></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="course_content">
                            <div className="swiper-title">淘宝天猫领券 5/7</div>
                            <img alt='5' src={img5}/></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="course_content">
                            <div className="swiper-title">淘宝天猫领券 6/7</div>
                            <img alt='6' src={img6}/></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="course_content">
                            <div className="swiper-title">淘宝天猫领券 7/7</div>
                            <img alt='7' src={img7}/></div>
                    </div>
                </div>
                <div className="swiper-pagination swiper-pagi"></div>
            </div>

        );
    }
}

export default Index;