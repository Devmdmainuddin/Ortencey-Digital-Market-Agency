
import Image from '../shared/Image';
import Container from '../shared/Container';

const Hero = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('/dgta.jpg')`
        }} className="w-full h-auto md:h-[950px] py-[138px]  bg-cover bg-no-repeat flex justify-center items-center">
        <Container>
            <div className="flex justify-between flex-col md:flex-row items-center gap-[111px]">
                <div>
                    <h3 className="text-[#FE651B] font-dm-sans text-xl lg:text-[25px] font-medium leading-[25px] tracking-normal  capitalize">Your Trusted Ortencey Agency</h3>
                    <h2 className="max-w-[695px] mt-5 text-white font-nunito text-2xl md:text-10 lg:text-[58px] font-extrabold  lg:leading-[70px] tracking-normal  capitalize">Our Digital Agency With
                        Excellence Services</h2>
                    <p className="max-w-[596px] text-white font-dm-sans text-lg lg:text-[20px] font-medium  lg:leading-[30px] tracking-normal  capitalize mt-5">The 3 golden rules professional Digital Marketing Agency don’t

                        want you to know about.</p>
                    <button className="text-white font-dm-sans text-[18px] font-normal leading-[30px]  capitalize py-[15px] px-[33px] rounded-full bg-[#FE651B] mt-[50px]"> Discover More</button>
                </div>
                <div>
                    <div className=" md:w-[359px] md:h-[359px] lg:w-[559px] lg:h-[559px] relative border border-[#FE651B] rounded-full">
                        <Image src='/bg.jpeg' alt='hero image' className='rounded-full relative top-12 right-12'></Image>

                    </div>

                </div>




            </div>
        </Container>

    </div>
    );
};

export default Hero;