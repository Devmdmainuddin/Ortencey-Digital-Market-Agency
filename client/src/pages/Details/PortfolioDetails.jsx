import { Link } from "react-router-dom";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import Image from "../../components/shared/Image";
import { FaCheck, FaTwitter } from "react-icons/fa6";
import { MdCall, MdMessage } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const PortfolioDetails = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                {/* section 01 */}
                <div className="mt-[120px] mb-[60px]">
                    <div className="image">
                        <Image src="/bgca.jpg" alt="Portfolio Details" className='rounded-[20px]' />
                    </div>
                </div>
                {/* section 02 */}
                <div className="mt-[120px] mb-[60px] py-16 px-6 rounded-[20px] bg-[#F4F4FE] flex justify-center flex-wrap gap-10">
                    <div className="w-[364px]">
                        <ul>
                            <li className="text-[26px] font-medium leading-[40px] font-dm-sans text-[#1A1A1A] flex gap-[41px] items-center">Start Date : <span className=" text-[16px] font-normal leading-[40px] text-[#6B6161]">15 Dec 2022</span></li>
                            <li className="text-[26px] font-medium leading-[40px] font-dm-sans text-[#1A1A1A] flex gap-[41px] items-center">End Date : <span className=" text-[16px] font-normal leading-[40px] text-[#6B6161]">12 Jan 2023</span></li>
                        </ul>
                    </div>
                    <div className="w-[364px]">
                        <ul>
                            <li className="text-[26px] font-medium leading-[40px] font-dm-sans text-[#1A1A1A] flex gap-[41px] items-center">Client : <span className=" text-[16px] font-normal leading-[40px] text-[#6B6161]">Jiyatan Raw </span></li>
                            <li className="text-[26px] font-medium leading-[40px] font-dm-sans text-[#1A1A1A] flex gap-[41px] items-center">Tags : <span className=" text-[16px] font-normal leading-[40px] text-[#6B6161]">Digital Agency</span></li>
                        </ul>
                    </div>
                    <div className="w-[364px]">
                        <ul>
                            <li className="text-[26px] font-medium leading-[40px] font-dm-sans text-[#1A1A1A] flex gap-[41px] items-center">Start Date : <span className=" text-[16px] font-normal leading-[40px] text-[#6B6161]">15 Dec 2022</span></li>
                            <li className="text-[26px] font-medium leading-[40px] font-dm-sans text-[#1A1A1A] flex gap-[41px] items-center">End Date : <span className=" text-[16px] font-normal leading-[40px] text-[#6B6161]">12 Jan 2023</span></li>
                        </ul>
                    </div>
                </div>
                {/* section 03 */}
                <div>
                    <div>
                        <h2 className="text-[#1A1A1A] text-[26px] font-medium leading-[40px]">Human Figurines Using Ladder to Reach Cracked lit Lightbulb as an Idea</h2>
                        <p className=" text-[#6b6161] text-[16px] font-normal leading-[26px] font-dm-sans mt-[17px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don{`'`}t look as even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn{`'`}t anything embarrassing hidden in the middle of text. All the as Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over Latin words need to as be sure there isn{`'`}t anything as embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-center gap-6">
                        <div className="flex-1">
                            <ul className=" py-5 flex flex-wrap justify-between items-center">
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
                            <div className="flex justify-between flex-col md:flex-row gap-6">
                                <div className="image1">
                                    <Image src='/bgca.jpg' alt='' className='rounded-[20px]'></Image>
                                </div>
                                <div className="image1">
                                    <Image src='/bgca.jpg' alt='' className='rounded-[20px]'></Image>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="max-w-[586px] rounded-[20px] py-8 px-10 shadow-[0px_0px_45px_0px_rgba(0,0,0,0.08)] bg-white group duration-500 ease-in-out">
                                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] after:animate-leftToRight group-hover:after:w-full  duration-500 ease-in-out">Need Your Help?</h2>

                                <ul className="mt-6 flex justify-between flex-wrap gap-[14px] ">
                                    <li className=" w-[246px] "><Link to="#" className="text-[#6B6161] hover:text-[#fe651b] transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2 "><span><MdCall className="text-[#fe651b]" /></span> +(323) 750-1234</Link></li>
                                    <li className=" w-[246px] "><Link to="#" className="text-[#6B6161] hover:text-[#fe651b] transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2 "><span><FaTwitter className="text-[#fe651b]" /></span> Abubokkor AK</Link></li>
                                    <li className=" w-[246px]"><Link to="#" className="text-[#6B6161] hover:text-[#fe651b] transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2"> <MdMessage className="text-[#fe651b]" />infoyourortencey@gmail.com</Link></li>
                                    <li className=" w-[246px]"><Link to="#" className="text-[#6B6161] hover:text-[#fe651b] transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2 "> <span><IoLocationSharp className="text-[#fe651b] " /></span> 374 FA Tower, William S Blvd, Melbourne
                                        2721, IL, USA</Link></li>
                                </ul>

                            </div>
                            <p className="max-w-[668px] text-[#6B6161] font-inter text-[16px] font-normal  mt-6">There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which do
                                look as even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn{`'`}t anything embarrassing.

                                Hidden in the middle of text. All the as Lorem Ipsum generators on the Internet tend to
                                repeat predefined chunks as necessary, making this the first true generator on the Inte
                                rnet. It uses a dictionary of over Latin words need to as be sure.</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default PortfolioDetails;