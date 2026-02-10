import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './styles/Home.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { homeSlides } from '../data/homeSlide'

const Home = () => {
    return (
        <section >
            <div className="inner">
                <h2>home</h2>
                <Swiper
                    navigation={true}
                    autoplay={true}
                    loop
                    pagination={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper">
                    {homeSlides.map(({ id, title, img, subtitle }) => (
                        <SwiperSlide key={id} style={{ backgroundImage: `url(${img})` }}>
                            <div className="slide-text">
                                <h4>{title}</h4>
                                <p>{subtitle}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Home