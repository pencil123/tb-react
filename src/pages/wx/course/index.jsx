import React, {Component} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/swiper-bundle.css";
import "./course.css";
import img1 from '../../../assets/imgs/1.png';
import img2 from '../../../assets/imgs/2.png';
import img3 from '../../../assets/imgs/3.png';
import img4 from '../../../assets/imgs/4.png';
import img5 from '../../../assets/imgs/5.png';
import img6 from '../../../assets/imgs/6.png';
import img7 from '../../../assets/imgs/7.png';
import img8 from '../../../assets/imgs/8.png';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Index extends Component {
    render() {
        return (
            <Swiper
                direction: "vertical"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img alt="1" src={img1}/></SwiperSlide>
                <SwiperSlide><img alt="2" src={img2}/></SwiperSlide>
                <SwiperSlide><img alt="3" src={img3}/></SwiperSlide>
                <SwiperSlide><img alt="4" src={img4}/></SwiperSlide>
                <SwiperSlide><img alt="5" src={img5}/></SwiperSlide>
                <SwiperSlide><img alt="6" src={img6}/></SwiperSlide>
                <SwiperSlide><img alt="7" src={img7}/></SwiperSlide>
                <SwiperSlide><img alt="8" src={img8}/></SwiperSlide>

            </Swiper>
        );
    }
}

export default Index;