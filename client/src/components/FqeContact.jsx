
import Container from './shared/Container';
import Image from './shared/Image';

const FqeContact = () => {
    return (
        <div className='bg-[#F4F4FF] py-[120px]'>
            <Container>
                <div className="flex flex-wrap gap-6 justify-center md:justify-between  ">
                    <div className="image w-[647px] h-[494px] rounded-[20px] mx-auto">
                        <Image src="/bgca.jpg" alt="Team Member" className='rounded-[20px]' />
                    </div>
                    <div className='mx-auto'>
                        <h2 className="text-[#1A1A1A] font-bold text-[46px]  text-center">Ask any Question</h2>
                        <p className="text-[#6B6161] font-normal text-[16px] leading-[36px] mt-2 max-w-[506px]"> Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing as dignissim eu a ad venenatis.</p>

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



                </div>
            </Container>
        </div>
    );
};

export default FqeContact;