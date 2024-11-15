import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import Pricings from "../../components/Home/Pricing";
import PriceSupport from "../../components/PriceSupport";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import {Autoplay  } from 'swiper/modules';
import Image from "../../components/shared/Image";
const Pricing = () => {
    return (
        <div>
            <Bredcumb/>
            <Pricings/>
            <PriceSupport/>
            <Container>
                <div className="my-[120px]">
                <Swiper
                            loop={true}
                           
                           
                            autoplay={{
                                delay: 1000,
                                // disableOnInteraction: false,
                              }}
                            modules={[Autoplay]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                535: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                               
                                879: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 1,
                                },
                                1124: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 1,
                                },
                            }}
                            spaceBetween={10}

                            className="mySwiper "
                        >
                          <SwiperSlide >
                          <div className="image1  h-[139px] ">
                                    <Image src='/pt3.png' alt='' ></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className="image1  h-[139px] ">
                                    <Image src='/pt1.png' alt='' ></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className="image1  h-[139px] ">
                                    <Image src='/pt2.png' alt='' ></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className="image1 h-[139px] ">
                                    <Image src='/pt3.png' alt='' ></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className="image1   h-[139px] ">
                                    <Image src='/pt4.png' alt='' ></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className="image1  h-[139px] ">
                                    <Image src='/pt5.png' alt='' ></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className="image1  h-[139px] ">
                                    <Image src='/pt2.png' alt='' ></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className="image1  h-[139px] ">
                                    <Image src='/pt3.png' alt='' ></Image>
                                </div>
                            </SwiperSlide>



                        </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Pricing;