import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination,Navigation,Autoplay } from 'swiper/modules';

const Home = () => {
    return (
        <section>
            <div className="inner">
                <h2>home</h2>
                <Swiper
                    navigation={true}
                    autoplay = {true}
                    loop
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination,Autoplay]}
                    className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Home