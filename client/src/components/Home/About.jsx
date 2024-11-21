import { Link } from "react-router-dom";
import Container from "../shared/Container";
import Image from "../shared/Image";
import { FaCheck } from "react-icons/fa6";

const About = () => {
    return (
        <div className="my-[120px]">
            <Container>
                <div className="flex flex-col lg:flex-row items-center lg:gap-[120px]">
                    <div>
                        <div className="image w-[280px] sm:w-[480px] h-[320px] lg:w-[528px] lg:h-[456px] relative">
                            <Image src='/dg.avif' alt='' className='border-[10px] border-white  rounded-[48px]'></Image>
                            <div className=" w-[184px] h-[264px] absolute bottom-1/2 right-0 translate-x-1/2 translate-y-1/2 rounded-full border-[10px] ">
                                <Image src='/dgt.jpeg' alt='' className='rounded-full'></Image>
                            </div>

                        </div>
                    </div>

                    <div className="content">
                        <div className="flex gap-2 items-center">
                            <img src="/icon1.png" alt="" />
                            <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">About Our Company</h3>
                        </div>
                        <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-extrabold leading-[56px]">Best Digital Marketing Agency
                            For People</h2>
                        <p className="max-w-[656px] text-[#6b6161] mt-6 font-dm-sans text-[16px] font-normal leading-[26px]">There are many variations of passages of Lorem Ipsum available, but the majority have assuffered alteration in some form, by injected humour, or randomised words which don{`'`}t a
                            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                            to be sure there isn{`'`}t anything.</p>
                        <ul className="flex justify-between flex-wrap mt-6">
                            <li className="w-1/2">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span>  Digital Strategy</Link>
                            </li>
                            <li className="w-1/2">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span>  SEO Optimization</Link>
                            </li>
                            <li className="w-1/2">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"> <span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span>  Marketing</Link>
                            </li>
                            <li className="w-1/2">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span>   First Working Process</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;