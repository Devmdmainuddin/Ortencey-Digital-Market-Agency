import React from 'react';
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import Image from '../../components/shared/Image';
import { Link } from 'react-router-dom';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';

const Error = () => {
    return (
        <div>
             <Navbar/>
            {/* Bredcumb */}
            <div className="bg-[url('/ab.webp')] bg-cover bg-no-repeat h-[368px] md:h-[456px] lg:h-[654px] flex items-center justify-center ">
                <Container>
                    <div className='py-8  md:py-[50px] '>

                        <h2 className='text-white font-inter text-[24px] font-semibold leading-[1.1] tracking-normal text-left capitalize mt-[14px]'>  Error </h2>
                        <ul className='flex items-center gap-2 mt-3'>
                            <li className='text-white font-inter text-[14px] font-normal leading-[1.1] tracking-normal text-center capitalize'>
                                <Link to='/' className="text-sm md:text-xl" >Home</Link>

                                <span className="mx-1 md:mx-2"> - </span>
                                <Link to='{`/${pathSegments[0]}`}' className="text-sm md:text-xl text-[#FE651B]">
                                    Error
                                </Link>

                            </li>
                        </ul>

                    </div>
                </Container>
            </div>

            <Container>
                <div className='flex justify-center items-center flex-col gap-6 my-[120px]'>
                    <div className="image">
                        <Image src="/error.png" alt="Error" />
                    </div>
                    <div className="content flex justify-center items-center flex-col">

                        <h2 className='text-[#1a1a1a] text-[25px] font-bold leading-[34px] font-nunito'>Oops! Page not found</h2>
                        <p className='text-[#6b6161] text-[16px] font-normal leading-[26px] tracking-[0] text-center '>The page you are looking for may have been moved, deleted, or does not exist.</p>
                        <Link to="/" className=" text-white text-[18px] font-normal leading-[30px]  capitalize py-[15px] px-[33px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mt-6 inline-block">Go back to home</Link>
                    </div>
                </div>

            </Container>
            <Footer/>
        </div>
    );
};

export default Error;