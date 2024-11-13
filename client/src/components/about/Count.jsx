import Container from "../shared/Container";
import Image from "../shared/Image";


const Count = () => {
    return (
        <div className="my-[120px]">
            <Container>
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6">
                        {/* <div className=""> */}
                            <div className="w-[342px] flex gap-2 items-center p-10 bg-[#F4F4FE] rounded-[20px]">
                                <div className="image w-[80px] h-[80px] rounded-full bg-[#3661FC] flex justify-center items-center">
                                    <Image src="/ac.png" alt="" className='w-9 h-9 '/>
                                </div>
                                <div className="content">
                                    <h2 className="text-[#1A1A1A] text-center font-dm-sans text-[45px] font-bold leading-[36px]">1500</h2>
                                    <p className="text-[#6B6161]  text-center font-dm-sans text-[18px] font-normal leading-[36px] mt-3">Project Complate</p>
                                </div>
                            </div>
                            <div className="w-[342px] flex gap-2 items-center p-10 bg-[#F4F4FE] rounded-[20px]">
                                <div className="image w-[80px] h-[80px] rounded-full bg-[#3661FC] flex justify-center items-center">
                                    <Image src="/ca2.png" alt="" className='w-9 h-9 '/>
                                </div>
                                <div className="content"> 
                                    <h2 className="text-[#1A1A1A] text-center font-dm-sans text-[45px] font-bold leading-[36px]">150+</h2>
                                    <p className="text-[#6B6161] text-center font-dm-sans text-[18px] font-normal leading-[36px] mt-3">Happy Clients </p>
                                </div>
                            </div>
                            <div className="w-[342px] flex gap-2 items-center p-10 bg-[#F4F4FE] rounded-[20px]" >
                                <div className="image w-[80px] h-[80px] rounded-full bg-[#3661FC] flex justify-center items-center">
                                    <Image src="/ca3.png" alt="" className='w-9 h-9 '/>
                                </div>
                                <div className="content">
                                    <h2 className="text-[#1A1A1A] text-center font-dm-sans text-[45px] font-bold leading-[36px]">95+</h2>
                                    <p className="text-[#6B6161]  text-center font-dm-sans text-[18px] font-normal leading-[36px] mt-3">Professional Team</p>
                                </div>
                            </div>
                            <div className="w-[342px] flex gap-2 items-center p-10 bg-[#F4F4FE] rounded-[20px]" >
                                <div className="image w-[80px] h-[80px] rounded-full bg-[#3661FC] text-white flex justify-center items-center">
                                    <Image src="/ca4.png" alt="" className='w-9 h-9 '/>
                                </div>
                                <div className="content">
                                    <h2 className="text-[#1A1A1A] text-center font-dm-sans text-[45px] font-bold leading-[36px]">120+</h2>
                                    <p className="text-[#6B6161]  text-center font-dm-sans text-[18px] font-normal leading-[36px] mt-3">Awards Win </p>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
            </Container>
            
        </div>
    );
};

export default Count;