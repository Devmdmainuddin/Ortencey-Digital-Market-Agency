import { useState } from "react";
import FqeContact from "../../components/FqeContact";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import Image from "../../components/shared/Image";
import { FaMinus, FaPlus } from "react-icons/fa6";


const Faq = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
  





    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="flex gap-6 items-center flex-col lg:flex-row my-[120px]">
                    <div >
                        <div className="flex gap-2 items-center">
                            <img src="/icon1.png" alt="" />
                            <h3 className="text-[#FE651B] font-dm-sans text-[20px] font-medium leading-[26px]">Common Questions</h3>
                        </div>
                        <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-extrabold leading-[56px]">Frequently Asked Questions</h2>

                        <div className="flex gap-6 mt-8">
                            <div className="flex flex-col gap-6 ">
                                <button className="py-[11px] px-[30px] bg-[#F4F4FE] rounded-full text-[#1A1A1A] hover:text-white  text-[20px] font-medium leading-[26px] hover:bg-[#6394de] transition-all duration-500 flex gap-3 items-center"> <img src="/bt1.png" alt="" />General Questions</button>
                                <button className="py-[11px] px-[30px] bg-[#F4F4FE] rounded-full  text-[#1A1A1A] hover:text-white  text-[20px] font-medium leading-[26px] hover:bg-[#5081ca] transition-all duration-500 flex gap-3 items-center"> <img src="/bt3.png" alt="" className="text-green-300" />Community</button>
                                <button className="py-[11px] px-[30px] bg-[#F4F4FE] rounded-full  text-[#1A1A1A] hover:text-white  text-[20px] font-medium leading-[26px] hover:bg-[#6fa0ea] transition-all duration-500 flex gap-3 items-center"><img src="/bt2.png" alt="" /> Support</button>
                            </div>
                            <div className="image">

                                <Image src="Illustrator.png" alt="faq-image" />
                            </div>
                        </div>

                    </div>

                    <div className=" w-full lg:w-[700px] flex flex-col gap-6">
                        <div className="shadow-[10px_10px_30px_0px_rgba(0,_0,_0,_0.08)] py-6 px-10 flex flex-col justify-center rounded-full ">
                            <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between relative '>
                                <h3 className='text-[#262626] text-xl font-bold'>Is it Full Digital Marketing Agency?</h3>
                                <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${isOpen ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${isOpen ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                            </div>
                            {isOpen && <div>

                                <p className="border-t border-t-[#F0F0F0] mt-3 pt-3">
                                    It is a long established fact that a reader will be distracted by the readable content of
                                    page when looking at its layout. The point of using Lorem Ipsuim is that it has as more
                                    less or randomised words which don{`'`}t look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum, you need to be sure.
                                </p>

                            </div>}

                        </div>
                        <div className="shadow-[10px_10px_30px_0px_rgba(0,_0,_0,_0.08)] py-6 px-10 rounded-full">
                            <div onClick={() => setIsOpen1(!isOpen1)} className='flex justify-between relative '>
                                <h3 className='text-[#262626] text-xl font-bold'>Is it Full Digital Marketing Agency?</h3>
                                <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${isOpen1 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${isOpen1 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                            </div>
                            {isOpen1 && <div>

                                <p className="border-t border-t-[#F0F0F0] mt-3 pt-3">
                                    It is a long established fact that a reader will be distracted by the readable content of
                                    page when looking at its layout. The point of using Lorem Ipsuim is that it has as more
                                    less or randomised words which don{`'`}t look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum, you need to be sure.
                                </p>

                            </div>}
                        </div>
                        <div className="shadow-[10px_10px_30px_0px_rgba(0,_0,_0,_0.08)] py-6 px-10 rounded-full">
                            <div onClick={() => setIsOpen2(!isOpen2)} className='flex justify-between relative '>
                                <h3 className='text-[#262626] text-xl font-bold'>Is it Full Digital Marketing Agency?</h3>
                                <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${isOpen2 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${isOpen2 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                            </div>
                            {isOpen2 && <div>

                                <p className="border-t border-t-[#F0F0F0] mt-3 pt-3">
                                    It is a long established fact that a reader will be distracted by the readable content of
                                    page when looking at its layout. The point of using Lorem Ipsuim is that it has as more
                                    less or randomised words which don{`'`}t look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum, you need to be sure.
                                </p>

                            </div>}
                        </div>
                        <div className="shadow-[10px_10px_30px_0px_rgba(0,_0,_0,_0.08)] py-6 px-10 rounded-full">
                            <div onClick={() => setIsOpen3(!isOpen3)} className='flex justify-between relative '>
                                <h3 className='text-[#262626] text-xl font-bold'>Is it Full Digital Marketing Agency?</h3>
                                <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${isOpen3 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${isOpen3 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                            </div>
                            {isOpen3 && <div>

                                <p className="border-t border-t-[#F0F0F0] mt-3 pt-3">
                                    It is a long established fact that a reader will be distracted by the readable content of
                                    page when looking at its layout. The point of using Lorem Ipsuim is that it has as more
                                    less or randomised words which don{`'`}t look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum, you need to be sure.
                                </p>

                            </div>}
                        </div>
                    </div>
                </div>
            </Container>
            <FqeContact />
        </div>
    );
};

export default Faq;