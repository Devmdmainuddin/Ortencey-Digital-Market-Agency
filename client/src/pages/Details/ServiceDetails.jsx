import { FaLongArrowAltRight } from "react-icons/fa";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";


const ServiceDetails = () => {
    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="my-[120px]">
                    <main>

                    </main>
                    <aside className="w-[464px] ">
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
                                    <textarea type="text" name="" id="" placeholder="Your Message" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full h-[173px] outline-0 rounded-[20px] resize-none" />
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