
import { Link } from 'react-router-dom';
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import { MdCall, MdMessage } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import Image from '../../components/shared/Image';

const Contact = () => {
    return (
        <div>
            <Bredcumb />
            <Container>
                <div className='flex flex-col lg:flex-row justify-center gap-6 bg-[#F4F4FF] my-[120px]'>
                    <div className=' p-[55px] w-full lg:w-1/2 rounded-[20px]'>
                        <h2 className="text-[#1A1A1A] text-[46px] font-bold leading-[56px] font-nunito">Contact With Us</h2>
                        <p className='text-[#6B6161] text-[16px] font-normal leading-[26px] font-dm-sans mt-5'>Send us a message and well respond as soon as possible</p>
                        <form action="" className=" flex justify-center items-center flex-col gap-5 mt-[47px]">
                            <div className="flex justify-between items-center gap-5 w-full">
                                <input type="text" name="" id="" placeholder="Your Name" className="py-[15px] px-[26px] text-[#9A9A9A] font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                <input type="email" name="" id="" placeholder="Email Address" className="py-[15px] px-[26px] text-[#9A9A9A] font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            </div>
                            <div className="flex justify-between items-center gap-5 w-full">
                                <input type="text" name="" id="" placeholder="Your Name" className="py-[15px] px-[26px] text-[#9A9A9A] font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                <input type="email" name="" id="" placeholder="Email Address" className="py-[15px] px-[26px] text-[#9A9A9A] font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            </div>

                            <input type="text" name="" id="" placeholder="Business Topic" className="py-[15px] px-[26px] text-[#9A9A9A] font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            <input type="text" name="" id="" placeholder="Your Message" className="h-[180px] py-[15px] px-[26px] text-[#9A9A9A] font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            <button className="w-full py-[15px] px-[33px] mt-9 inline text-white bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full ">Send Message</button>
                        </form>
                    </div>
                    <div className='bg-[#3661FC] py-[55px] px-[66px] rounded-[20px] w-full lg:w-1/2 '>
                        <h2 className="text-white text-[46px] font-bold leading-[46px] font-nunito">Need Any Help?</h2>
                        <p className='text-white text-[16px] font-normal leading-[26px] font-dm-sans mt-5'>Call us or message and well respond as soon as possible</p>
                        <div className='flex gap-6 flex-wrap justify-between mt-[42px]'>
                          
                            <div className='flex gap-2 max-w-[353px]'>
                          
                                    <span className='w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#FE651B] to-[#FFAA52] flex justify-center items-center'>  <MdCall className="text-white text-lg" /></span>

                                <div className="content">
                                    <h2 className='text-white text-[25px] font-bold leading-[25px] font-nunito'>Phone</h2>
                                    <p className='text-white text-[16px] font-normal leading-[26px] font-dm-sans'>+(323) 750-1234 </p>
                                    <p className='text-white text-[16px] font-normal leading-[26px] font-dm-sans'>+(323) 750-1234 </p>
                                </div>
                            </div>
                            <div className='flex gap-2 max-w-[353px]'>
                               
                                    <span className='w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#FE651B] to-[#FFAA52] flex justify-center items-center'>  <MdMessage className="text-white text-lg" /></span>
                              
                                <div className="content">
                                    <h2 className='text-white text-[25px] font-bold leading-[25px] font-nunito'>Email</h2>
                                    <p className='text-white text-[16px] font-normal leading-[26px] font-dm-sans'>infoyour@gmail.com </p>
                                    <p className='text-white text-[16px] font-normal leading-[26px] font-dm-sans'>domaininfo@gmail.com </p>
                                </div>
                            </div>
                            <div className='flex gap-2 '>
                         
                                    <span className='w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#FE651B] to-[#FFAA52] flex justify-center items-center'>  <IoLocationSharp className="text-white text-lg" /></span>
                         
                                <div className="content">
                                    <h2 className='text-white text-[25px] font-bold leading-[25px] font-nunito'>Location</h2>
                                    <p className='text-white text-[16px] font-normal leading-[26px] font-dm-sans max-w-[353px]'>4517 Washington Ave. 32 King Street, Melbourne
                                    Manchester, Road USA </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="image mt-[58px] w-full  bg-[#F4F4FF] py-[35px] px-[42px] rounded-[20px]">
                            <img src='/Illustration.png' alt='image'></img>
                        </div>
                        
                    </div>
                </div>
            </Container>
            <Image src='/map.svg' className='h-[500px]'></Image>
        </div>
    );
};

export default Contact;