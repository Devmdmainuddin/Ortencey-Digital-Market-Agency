import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Container from '../shared/Container';
import Image from '../shared/Image';
const Choose = () => {
    return (
        <div className='bg-[#F6F6FF] py-[120px]'>
            <Container>
               <div className='flex items-center flex-col lg:flex-row gap-[146px]'>
               <div className="content max-w-[585px]">
                    <div className="flex gap-2 items-center">
                        <img src="/icon1.png" alt="" />
                        <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Why Choose Ortencey</h3>
                    </div>
                    <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-extrabold leading-[56px]">Reason For Choosing Our
                        Digital Agency
                    </h2>
                    <p className="max-w-[656px] text-[#6b6161] mt-6 font-dm-sans text-[16px] font-normal leading-[26px]">There are many variations of passages of Lorem Ipsum available, but the majori
                        suffered alteration in some form, by injected humour, or randomised word whic
                        look even sligh believable. If you are going to use.</p>
                    <div className='mt-6'>
                        <div>

                            <div className='flex justify-between items-center'>
                                <h3>Software Development</h3> <span>85%</span>
                            </div>
                            <ProgressBar completed="85" isLabelVisible={false} height='8px' bgColor="#3661FC" className='mt-2 border-8 border-[#D4DCF9] rounded-full'></ProgressBar>
                        </div>
                        <div>

                            <div className='flex justify-between items-center mt-5'>
                                <h3>Web Development</h3> <span>95%</span>
                            </div>
                            <ProgressBar completed="95" isLabelVisible={false} height='8px' bgColor="#3661FC" className='mt-2 border-8 border-[#D4DCF9] rounded-full'></ProgressBar>
                        </div>
                        <div>
                            <div className='flex justify-between items-center mt-5'>
                                <h3>UL / UX Design</h3> <span>80%</span>
                            </div>

                            <ProgressBar completed="80" height='8px' isLabelVisible={false} bgColor="#3661FC" className='mt-2 border-8 border-[#D4DCF9] rounded-full'></ProgressBar>
                        </div>


                    </div>
                </div>
                <div className="image w-[708px] h-[460px] rounded-[50px relative">
                    <Image src="/bgca.jpg" className="rounded-[50px]"></Image>
                    <div className='w-[364px] flex gap-2 items-center absolute bottom-[30px] left-1/2 -translate-x-1/2 py-[15px] px-[50px] bg-white rounded-full '>
                        <span className='text-[46px] text-[#FF9A52] font-bold leading-[56px]'>25</span>
                        <div>
                        <h3 className='text-[25px] font-bold inline-block'> Years Experience</h3>
                        </div>
                        
                    </div>
                </div>
               </div>
            </Container>

        </div>
    );
};

export default Choose;