import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
// import '../../style/popularCourse.css'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, } from 'swiper/modules';

import { Rating, Star } from "@smastrom/react-rating";
import Image from "../../components/shared/Image";

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
            <Bredcumb />
            <div>

                <Container>
                    <div className="my-[120px]">
                    <div className="flex justify-center items-center flex-col">
                            <div className="flex gap-2 items-center">
                                <img src="/icon1.png" alt="" />
                                <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Testimonial</h3>
                            </div>
                            <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-extrabold leading-[56px]">What Our Client Say</h2>
                        </div>
                        <Swiper
                            loop={true}
                            pagination={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            breakpoints={{

                                1026: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },

                            }}
                            spaceBetween={24}

                            className="mySwiper testimonial mt-[46px]"
                        >
                            {Testimonial.map((item, idx) => <SwiperSlide key={idx}>
                                <div >
                                    <div className="flex justify-between items-center">
                                        <img src="/qua.png" alt="testimonial" />
                                        <div className="bg-[#F4F4FE] py-[15px] px-5 rounded-full"><Rating style={{ maxWidth: 200 }} value={item.rating} itemStyles={myStyles} /></div>
                                    </div>
                                    <p className="text-[#1a1a1a] font-[DM Sans] text-[20px] font-normal leading-[30px] max-w-[561px] mt-[30px]">{item.description}</p>
                                    <div className="flex items-center gap-3 mt-[30px]">
                                        <div className="w-[62px] h-[62px] rounded-full">
                                            <Image src={item.image} alt="testimonial" className='rounded-full' />
                                        </div>
                                        <div className="">
                                            <h2 className="font-bold text-[25px] leading-[1px] text-[#1A1A1A]">{item.name}</h2>
                                            <h3 className="font-normal text-[16px] leading-[26px] text-[#6B6161] mt-3">{item.role}</h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)}




                        </Swiper>
                    </div>
                    <div className="my-[120px]  mx-auto">
                        <div className="flex justify-center items-center flex-col">
                            <div className="flex gap-2 items-center">
                                <img src="/icon1.png" alt="" />
                                <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Testimonial</h3>
                            </div>
                            <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-extrabold leading-[56px]">What Our Client Say</h2>
                        </div>
                        <Swiper
                            loop={true}
                            navigation={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Navigation, Autoplay]}

                            spaceBetween={0}

                            className="mySwiper testimonial2 mt-[46px]"
                        >
                            {Testimonial.map((item, idx) => <SwiperSlide key={idx} className="">
                                <div >
                                    <div className="flex justify-between items-center max-w-[886px] mx-auto">
                                        <img src="/qua.png" alt="testimonial" />
                                        <div className="flex justify-between items-center gap-3">
                                            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full">
                                                <Image src={item.image} alt="testimonial" className='rounded-full' />
                                            </div>
                                            <div>
                                                <h2 className="font-bold text-[25px] leading-[1px] text-[#1A1A1A ">{item.name}</h2>
                                                <h3 className="font-normal text-[16px] leading-[26px] text-[#6B6161] mt-3">{item.role}</h3>
                                            </div>
                                        </div>
                                        <div className="bg-[#F4F4FE] p-2 md:py-[15px] md:px-5 rounded-full"><Rating style={{ maxWidth: 150 }} value={item.rating} itemStyles={myStyles} /></div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center max-w-[886px] mx-auto">
                                        <p className="text-[#1a1a1a] font-[DM Sans] text-center text-[20px] font-normal leading-[30px]  mt-[30px]">{item.description}</p>
                                    </div>


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