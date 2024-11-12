
import Container from '../shared/Container';
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Image from '../shared/Image';

const Pricing = () => {
    return (
        <div className='my-[120px]'>
            <Container>
                <div className='flex justify-center items-center flex-col'>
                    <div className="flex gap-2 items-center">
                        <img src="/icon1.png" alt="" />
                        <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Our Pricing</h3>
                    </div>
                    <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-bold leading-[56px]">Our Best Pricing Plan</h2>
                </div>
                <div className='flex flex-wrap justify-center gap-6 my-12 '>
                    <div className="w-[464px] group py-8 px-[44px] bg-[#F4F4FE] rounded-[50px] shadow-md relative transition duration-500">
                        <div className=''>
                            <h3 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px]">Basic Plan</h3>
                            <div className="mb-4">
                                <span className="relative -top-6 right-1 text-xl text-[#3661FC] font-medium">$</span>
                                <span className="text-[#3661fc] font-nunito text-[46px] font-bold leading-[56px]">10</span>
                                <span className="text-[#6b6161] font-dm-sans text-[16px] font-normal leading-[26px]">/Per Month</span>
                            </div>

                        </div>

                        <hr className='mt-6 mb-8' />
                        <ul className="self-start mb-8 mx-auto flex justify-center items-center flex-col">
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">

                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Free Consultations</Link>
                            </li>
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Business Planning</Link>
                            </li>
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Investment Process</Link>
                            </li>
                            <li className="flex items-center text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Market Research</Link>
                            </li>
                        </ul>
                        <button className="text-[#1a1a1a] font-dm-sans text-[18px] font-normal leading-[23px] py-4 w-full border border-[#3661fc] rounded-full bg-[#F4F4FE] group-hover:border-[#fe651b] group-hover:bg-gradient-to-r from-[#fe651b] to-[#ffaa52] transition-all duration-500" href="#">Choose Plan</button>
                        <div className="overlay h-[105px] w-[134px] border-b-[10px] border-l-[10px] border-white rounded-tr-[45px] rounded-bl-[45px]  absolute top-0 right-0 bg-[#3661fc] group-hover:bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center transition-all duration-500">
                            <Image src='/p2.png' alt='' className='rounded-[55px] w-12 h-12 '></Image>
                        </div>
                    </div>
                    <div className="w-[464px] group py-8 px-[44px] bg-[#F4F4FE] rounded-md shadow-md relative  transition duration-500">
                        <h3 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px]">Glod Plan</h3>
                        <div className="mb-4">
                            <span className="relative -top-6 right-1 text-xl text-[#3661FC] font-medium">$</span>
                            <span className="text-[#3661fc] font-nunito text-[46px] font-bold leading-[56px]">10</span>
                            <span className="text-[#6b6161] font-dm-sans text-[16px] font-normal leading-[26px]">/Per Month</span>
                        </div>
                        <hr className='mt-6 mb-8' />
                        <ul className="self-start mb-8 mx-auto flex justify-center items-center flex-col">
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">

                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Free Consultations</Link>
                            </li>
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Business Planning</Link>
                            </li>
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Investment Process</Link>
                            </li>
                            <li className="flex items-center text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Market Research</Link>
                            </li>
                        </ul>
                        <button className="text-[#1a1a1a] font-dm-sans text-[18px] font-normal leading-[23px] py-4 w-full border border-[#3661fc] rounded-full bg-[#F4F4FE] group-hover:border-[#fe651b] group-hover:bg-gradient-to-r from-[#fe651b] to-[#ffaa52] transition-all duration-500" href="#">Choose Plan</button>
                        <div className="overlay h-[105px] w-[134px] border-b-[10px] border-l-[10px] border-white rounded-tr-[45px] rounded-bl-[45px]  absolute top-0 right-0 bg-[#3661fc] group-hover:bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center transition-all duration-500">
                            <Image src='/p2.png' alt='' className='rounded-[55px] w-12 h-12 '></Image>
                        </div>
                    </div>
                    <div className="w-[464px] group py-8 px-[44px]  rounded-md shadow-md relative transition duration-500">
                        <h3 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px]">Silver Plan</h3>
                        <div className="mb-4">
                            <span className="relative -top-6 right-1 text-xl text-[#3661FC] font-medium">$</span>
                            <span className="text-[#3661fc] font-nunito text-[46px] font-bold leading-[56px]">10</span>
                            <span className="text-[#6b6161] font-dm-sans text-[16px] font-normal leading-[26px]">/Per Month</span>
                        </div>
                        <hr className='mt-6 mb-8' />
                        <ul className="self-start mb-8 mx-auto flex justify-center items-center flex-col">
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">

                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Free Consultations</Link>
                            </li>
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Business Planning</Link>
                            </li>
                            <li className="flex items-center mb-3 text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Investment Process</Link>
                            </li>
                            <li className="flex items-center text-coolGray-500 font-medium text-center">
                                <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck />
                                </span>  Market Research</Link>
                            </li>
                        </ul>
                        <button className="text-[#1a1a1a] font-dm-sans text-[18px] font-normal leading-[23px] py-4 w-full border border-[#3661fc] rounded-full bg-[#F4F4FE] group-hover:border-[#fe651b] group-hover:bg-gradient-to-r from-[#fe651b] to-[#ffaa52] transition-all duration-500" href="#">Choose Plan</button>
                        <div className="overlay h-[105px] w-[134px] border-b-[10px] border-l-[10px] border-white rounded-tr-[45px] rounded-bl-[45px]  absolute top-0 right-0 bg-[#3661fc] group-hover:bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center transition-all duration-500">
                            <Image src='/p2.png' alt='' className='rounded-[55px] w-12 h-12 '></Image>
                        </div>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default Pricing;