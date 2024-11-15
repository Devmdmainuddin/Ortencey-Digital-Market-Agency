import { MdCall, MdOutlineMessage } from "react-icons/md";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import Image from "../../components/shared/Image";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";


const TeamDetails = () => {
    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="flex gap-6 justify-between flex-wrap bg-[#F4F4FF] mt-[120px] mb-[56px] p-[30px]">
                    <div className="image w-[555px] h-[535px] rounded-[20px]">
                        <Image src="/bgca.jpg" alt="Team Member" className='rounded-[20px]' />
                    </div>
                    <div className="content max-w-[568px] ">
                        <h2 className="text-[#1A1A1A] font-nunito text-[36px] font-bold leading-[56px]">David Phillips</h2>
                        <p className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]">Senior Manager</p>
                        <div>
                            <ul className="mt-8">
                                <li className="text-[#252424] font-dm-sans text-[20px] font-medium leading-[50px] flex gap-3 items-center"><IoBagHandleSharp className="text-[#0064F6]" />  Experience: <span className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[50px]"> 15 Years</span></li>
                                <li className="text-[#252424] font-dm-sans text-[20px] font-medium leading-[50px] flex gap-3 items-center my-3"><MdOutlineMessage className="text-[#0064F6]" /> E-mail: <span className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[50px]">icourtnyhenry@example.com</span></li>
                                <li className="text-[#252424] font-dm-sans text-[20px] font-medium leading-[50px] flex gap-3 items-center"><MdCall className="text-[#0064F6]" /> Phone: <span className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[50px]">+1-800-456-478-00</span></li>
                                <li className="text-[#252424] font-dm-sans text-[20px] font-medium leading-[50px] flex gap-3 items-center mt-3"><FaLocationDot className="text-[#0064F6]" /> Location: <span className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[50px]">380 St Kilda Road, Melbourne
                                    VIC 3004, Australia</span></li>
                            </ul>
                            <div className="flex justify-between mt-[50px]">
                                <h2 className="text-[#1A1A1A] font-dm-sans text-[20px] font-medium leading-[26px]">Follow Me: </h2>
                                <div className="flex justify-center items-center gap-3 ">
                                    <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC] hover:text-white  bg-white hover:bg-blue-600 transition-all duration-500" >
                                        <FaFacebookF className=" text-[20px]" />
                                    </Link>
                                    <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC]  hover:text-white  bg-white hover:bg-blue-600 transition-all duration-500" >
                                        <FaLinkedinIn className=" text-[20px]" />
                                    </Link>
                                    <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC] bg-white hover:text-white   hover:bg-blue-600 transition-all duration-500" >
                                        <FaInstagram className=" text-[20px]" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex justify-between flex-wrap gap-6 my-[56px]">
                    <div className='mt-6 w-[586px]'>
                        <div className="w-full">

                            <div className='flex justify-between items-center'>
                                <h3>Software Development</h3> <span>85%</span>
                            </div>
                            <ProgressBar completed="85" isLabelVisible={false} height='8px' bgColor="#3661FC" className='mt-2 border-8 border-[#D4DCF9] rounded-full'></ProgressBar>
                        </div>
                        <div className="w-full">

                            <div className='flex justify-between items-center mt-5'>
                                <h3>Web Development</h3> <span>95%</span>
                            </div>
                            <ProgressBar completed="95" isLabelVisible={false} height='8px' bgColor="#3661FC" className='mt-2 border-8 border-[#D4DCF9] rounded-full'></ProgressBar>
                        </div>
                        <div className="w-full">
                            <div className='flex justify-between items-center mt-5'>
                                <h3>UL / UX Design</h3> <span>80%</span>
                            </div>

                            <ProgressBar completed="80" height='8px' isLabelVisible={false} bgColor="#3661FC" className='mt-2 border-8 border-[#D4DCF9] rounded-full'></ProgressBar>
                        </div>


                    </div>
                    <div className="max-w-[701px]">
                        <h2 className="text-[#1A1A1A] font-nunito text-[46px] font-bold leading-[56px]">Personal Experience and Skills</h2>
                        <p className="text-[#636363] mt-5 font-poppins text-[16px] font-normal leading-[26px]">Since joining Sotcox in 2009 .Web design encompasses many different skills and discipli
                            web graphic design; user interface design (UI design); authoring, including standardise
                            optimization. Often many individuals will work in teams covering different aspects of the

                            The term  web design is normally used to describe the design process relating to the
                            front-end (client side) design of a website including writing markup. Web design partiy
                            overlaps web engineering in the broader scope of web development.</p>
                    </div>
                </div>

                <div className="flex gap-6 justify-between flex-wrap bg-[#F4F4FF] py-12 px-[50px]">
                    <div>
                        <h2 className="text-[#1A1A1A] font-bold text-[46px] leading-[36px]">Contact Me</h2>
                        <p className="text-[#6B6161] font-normal text-[16px] leading-[36px]"> Your email address will not be published. Required fields are marked </p>

                        <form action="" className="max-w-[608px] flex justify-center items-center flex-col gap-5 mt-[30px]">
                            <div className="flex justify-between items-center gap-5 w-full">
                                <input type="text" name="" id="" placeholder="Your Name" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                <input type="email" name="" id="" placeholder="Email Address" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            </div>

                            <input type="text" name="" id="" placeholder="Business Topic" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            <input type="text" name="" id="" placeholder="Your Message" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            <button className="py-[15px] px-[33px] mt-9 inline text-white bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mr-auto">Send Message</button>
                        </form>
                    </div>


                    <div className="image w-[658px] h-[525px] rounded-[20px]">
                        <Image src="/bgca.jpg" alt="Team Member" className='rounded-[20px]' />
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default TeamDetails;