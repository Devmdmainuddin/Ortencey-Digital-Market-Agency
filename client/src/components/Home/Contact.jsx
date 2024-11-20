import { TbTargetArrow } from "react-icons/tb";
import Container from "../shared/Container";
import Image from "../shared/Image";

const Contact = () => {
    return (
        <div className="mt-[220px] mb-[120px]">
            <Container>
                <div className=" bg-[#3661FC] px-[80px] rounded-[50px] flex flex-wrap justify-between relative">
                    <div className="pt-[185px] pb-[85px]  flex flex-wrap justify-center xl:justify-between gap-6">
                        <div className="image w-full h-auto sm:w-[422px] sm:h-[422px] md:w-[592px] md:h-[566px] rounded-[20px]">
                            <Image src='/ap.jpg' alt='' className='rounded-[20px]'></Image>
                        </div>
                        <div className="content">
                            <div className="flex gap-2 justify-center items-center">
                                <TbTargetArrow className="font-sans  text-[22px] text-red-400" />
                                <h3 className="text-white font-dm-sans text-[20px] font-medium leading-[26px]">Make an Appointment</h3>
                            </div>
                            <h2 className="text-white text-center mt-4 font-nunito text-[46px] font-extrabold leading-[56px]"> Start New Project With Us</h2>

                            <form action="" className="max-w-[608px] flex justify-center items-center flex-col gap-5 mt-[47px]">
                                <div className="flex justify-between items-center gap-5 w-full">
                                    <input type="text" name="" id="" placeholder="Your Name" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                    <input type="email" name="" id="" placeholder="Email Address" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                </div>

                                <input type="text" name="" id="" placeholder="Business Topic" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                <input type="text" name="" id="" placeholder="Your Message" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                <button className="py-[15px] px-[33px] mt-9 inline text-white bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mr-auto">Send Message</button>
                            </form>
                            
                        </div>
                    </div >

                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] py-[53px] px-[60px] border-[15px] border-white rounded-full bg-gradient-to-r from-[#FE651B] to-[#FFAA52] flex flex-wrap items-center justify-center lg:justify-between gap-6">
                        {/* <div className=""> */}
                            <div className="flex gap-2 items-center">
                                <div className="image w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center">
                                    <img src="/ca.png" alt="" className='w-9 h-9 '/>
                                </div>
                                <div className="content">
                                    <h2 className="text-white text-center font-dm-sans text-[45px] font-bold leading-[36px]">1500</h2>
                                    <p className="text-white text-center font-dm-sans text-[18px] font-normal leading-[36px] mt-3">Project Complate</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="image w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center">
                                    <img src="/ca.png" alt="" className='w-9 h-9 '/>
                                </div>
                                <div className="content">
                                    <h2 className="text-white text-center font-dm-sans text-[45px] font-bold leading-[36px]">1500</h2>
                                    <p className="text-white text-center font-dm-sans text-[18px] font-normal leading-[36px] mt-3">Project Complate</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="image w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center">
                                    <img src="/ca.png" alt="" className='w-9 h-9 '/>
                                </div>
                                <div className="content">
                                    <h2 className="text-white text-center font-dm-sans text-[45px] font-bold leading-[36px]">1500</h2>
                                    <p className="text-white text-center font-dm-sans text-[18px] font-normal leading-[36px] mt-3">Project Complate</p>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Contact;