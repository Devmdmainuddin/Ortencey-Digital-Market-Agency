import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
// import '../../style/popularCourse.css'
import "swiper/css";

import 'swiper/css/pagination';
import {Autoplay, Pagination } from 'swiper/modules';

import { Rating, Star } from "@smastrom/react-rating";

const Testimonial = () => {
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
        
      }
    const Testimonial = [
        {
            id: 1,
            image: "/bgca.jpg",
            name: "Robert Sions",
            role: "Business Consultant",
            description: "There are many variations of passages of Lorem Ipsum availa the majority have suffered alteration in some form by injecte 0ur, or rando word which don't look even slightly a believable. If you are going to use a passage of Lorem Ipsum, you need sure there isn't anything embarrassing.",
            rating: 4,
        },
        {
            id: 2,
            image: "/bgca.jpg",
            name: "John",
            role: "Developer",
            description: "There are many variations of passages of Lorem Ipsum availa the majority have suffered alteration in some form by injecte 0ur, or rando word which don't look even slightly a believable. If you are going to use a passage of Lorem Ipsum, you need sure there isn't anything embarrassing.",
            rating: 3,
        },
        {
            id: 3,
            image: "/bgca.jpg",
            name: "Sarah",
            role: "Designer",
            description: "There are many variations of passages of Lorem Ipsum availa the majority have suffered alteration in some form by injecte 0ur, or rando word which don't look even slightly a believable. If you are going to use a passage of Lorem Ipsum, you need sure there isn't anything embarrassing.",
            rating: 5,
        },
        {
            id: 4,
            image: "/bgca.jpg",
            name: "Michael",
            role: "Marketing Specialist",
            description: "There are many variations of passages of Lorem Ipsum availa the majority have suffered alteration in some form by injecte 0ur, or rando word which don't look even slightly a believable. If you are going to use a passage of Lorem Ipsum, you need sure there isn't anything embarrassing.",
            rating: 5,
        },
        {
            id: 5,
            image: "/bgca.jpg",
            name: "Emily",
            role: "Project Manager",
            description: "There are many variations of passages of Lorem Ipsum availa the majority have suffered alteration in some form by injecte 0ur, or rando word which don't look even slightly a believable. If you are going to use a passage of Lorem Ipsum, you need sure there isn't anything embarrassing.",
            rating: 4,
        }
    ]
    return (
        <div>
            <Bredcumb/>
            <div>

            <Container>
            <div className="my-[120px]">
                <Swiper
                            loop={true}
                          
                            pagination={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            modules={[Pagination,Autoplay]}
                             breakpoints={{
                           
                                1026: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                               
                            }}
                            spaceBetween={24}

                            className="mySwiper testimonial"
                        >
                          {Testimonial.map((item, idx) => <SwiperSlide key={idx}>
                                  <div >
                                        <div className="flex justify-between items-center">
                                            <img src="/qua.png" alt="testimonial" />
                                            <div className="bg-[#F4F4FE] py-[15px] px-5 rounded-full"><Rating  style={{ maxWidth: 250 }} value={item.rating} itemStyles={myStyles} /></div>
                                        </div>
                                        <p className="text-[#1a1a1a] font-[DM Sans] text-[20px] font-normal leading-[30px] max-w-[561px] mt-[30px]">{item.description}</p>
                                        <h2 className="font-bold text-[25px] leading-[1px] text-[#1A1A1A mt-[30px]">{item.name}</h2>
                                        <h3 className="font-normal text-[16px] leading-[26px] text-[#6B6161] mt-3">{item.role}</h3>
                                    </div>
                                </SwiperSlide>)}
                          



                        </Swiper>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default Testimonial;