import { FaLongArrowAltRight } from "react-icons/fa";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import Image from "../../components/shared/Image";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ServiceDetails = () => {
    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="my-[120px] flex justify-between gap-6 xl:gap-[30px] flex-col lg:flex-row">
                    <main className="flex-1">
                        <div className="h-[450px]">
                            <Image src="/bgca.jpg" className='rounded-[20px] border-[10px] border-[#F4F4FE]'></Image>
                        </div>
                        <div className="content mt-[33px]">
                            <h2 className="text-[#1A1A1A] font-nunito text-[25px] font-bold leading-[34px]">Search Engine Optimization</h2>
                            <p className="mt-5 text-[#6B6161] font-dm-sans text-base font-normal leading-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don{`'`}t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn{`'`}t anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat</p>
                        </div>

                        <div className="mt-12 flex justify-between flex-col lg:flex-row gap-[194px] lg:gap-6">
                            <div className="image">
                                <div className="relative w-[267px] xl:w-[342px] md:h-[322px] xl:h-[408px]">
                                    <Image src="/bgca.jpg" className='rounded-[20px] ' />
                                    <Image src="/bgca.jpg" className='rounded-[20px] absolute top-1/2 left-1/2 border-[10px] border-white' />
                                </div>
                            </div>
                            <div className="content">
                                <h2 className="text-[#1A1A1A] font-nunito text-[25px] font-bold leading-[34px]">Our Service Process</h2>
                                <div className="flex flex-col gap-6 mt-6">
                                    <div className="flex gap-2 items-center bg-[#F4F4FF] p-5 rounded-[10px]">
                                        <div className="image w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center">
                                            <img src="/ca.png" alt="" className='w-7 h-7 ' />
                                        </div>
                                        <div className="content">
                                            <h2 className="text-[#1A1A1A] font-dm-sans text-[20px] font-medium leading-[26px]">Creative Analysis</h2>
                                            <p className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[24px] mt-3 max-w-[252px]">Creative analysis is important. It is
                                                common for marketers</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center bg-[#F4F4FF] p-5 rounded-[10px]">
                                        <div className="image  w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center">
                                            <img src="/ca.png" alt="" className='w-7 h-7 ' />
                                        </div>
                                        <div className="content">
                                            <h2 className="text-[#1A1A1A] font-dm-sans text-[20px] font-medium leading-[26px]">Design & Scratches</h2>
                                            <p className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[24px] mt-3 max-w-[252px]">Creative analysis is important. It is
                                                common for marketers</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center bg-[#F4F4FF] p-5 rounded-[10px]">
                                        <div className="image  w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center">
                                            <img src="/ca.png" alt="" className='w-7 h-7 ' />
                                        </div>
                                        <div className="content">
                                            <h2 className="text-[#1A1A1A] font-dm-sans text-[20px] font-medium leading-[26px]">Development & Delivery  </h2>
                                            <p className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[24px] mt-3 max-w-[252px]">Creative analysis is important. It is
                                                common for marketers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[156px]">
                            <h2 className="text-[#1A1A1A] font-nunito text-[25px] font-bold leading-[34px]">We Hope You Find What You are Looking for</h2>
                            <p className="mt-5 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don{`'`}t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn{`'`}t anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat</p>
                            <ul className=" py-5 ">
                                <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span> Research beyond the business plan</Link>
                                </li>
                                <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span> Customer Oriented Program Daily</Link>
                                </li>
                                <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium ">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span> The ability to turnaround consulting</Link>
                                </li>
                                <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span> Customer engagement matters</Link>
                                </li>
                            </ul>
                        </div>

                    </main>
                    <aside className="w-full md:w-[324px] xl:w-[464px] ">
                        <div className="rounded-[20px] p-10 shadow-[0px_0px_45px_0px_rgba(0,0,0,0.08)] bg-white group">
                            <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] after:animate-leftToRight group-hover:after:w-full transition-all duration-500">Our All Service</h2>
                            <div className="mt-6">
                                <button className=" transition-all duration-500 py-[15px] px-[33px] mt-9 text-[#1a1a1a] font-dm-sans text-[20px] font-medium leading-[26px]   border bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full  flex gap-4 items-center ">Search Engine Optimization <FaLongArrowAltRight /></button>
                                <button className=" transition-all duration-500 py-[15px] px-[33px] mt-9 text-[#1a1a1a] font-dm-sans text-[20px] font-medium leading-[26px]   border bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full  flex gap-4 items-center ">Web Design & Development <FaLongArrowAltRight /></button>
                                <button className=" transition-all duration-500 py-[15px] px-[33px] mt-9 text-[#1a1a1a] font-dm-sans text-[20px] font-medium leading-[26px]   border bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full  flex gap-4 items-center ">Email and Content Marketing <FaLongArrowAltRight /></button>
                                <button className=" transition-all duration-500 py-[15px] px-[33px] mt-9 text-[#1a1a1a] font-dm-sans text-[20px] font-medium leading-[26px]   border bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full   flex gap-4 items-center">Social Media Network Marting <span className="flex items-center justify-center"><FaLongArrowAltRight /></span></button>
                            </div>
                        </div>
                        <div className="rounded-[20px] p-10 shadow-[0px_0px_45px_0px_rgba(0,0,0,0.08)] bg-[#3D3D3D] mt-[50px] group">
                            <h2 className="text-white font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-[10px] after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500 " >Get a free quote</h2>
                            <div className="mt-6">
                                <form action="" className="max-w-[608px] flex justify-center items-center flex-col gap-5 mt-[47px]">
                                    <input type="text" name="" id="" placeholder="Your Name" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-full" />
                                    <input type="email" name="" id="" placeholder="Your Email Address" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-full" />
                                    <textarea  name="" id="" placeholder="Your Message" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full h-[173px] outline-0 rounded-[20px] resize-none" />
                                    <button className="py-[15px] px-[33px] mt-[30px] inline text-white bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mr-auto">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="rounded-[20px] p-10 shadow-[0px_0px_45px_0px_rgba(0,0,0,0.08)] bg-white mt-[50px] group">
                            <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500">Download</h2>
                            <div className="mt-6">
                                <button className=" transition-all duration-500 py-[15px] px-[33px] mt-9 text-[#1a1a1a] font-dm-sans text-[20px] font-medium leading-[26px]   border bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full  flex gap-4 items-center ">Our Brochures 2023 <FaLongArrowAltRight /></button>
                                <button className=" transition-all duration-500 py-[15px] px-[33px] mt-9 text-[#1a1a1a] font-dm-sans text-[20px] font-medium leading-[26px]   border bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full  flex gap-4 items-center ">About Our Company <FaLongArrowAltRight /></button>

                            </div>
                        </div>

                    </aside>
                </div>
            </Container>
        </div>
    );
};

export default ServiceDetails;