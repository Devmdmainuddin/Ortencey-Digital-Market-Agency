import { Link } from 'react-router-dom';
import Container from './shared/Container';

const PriceSupport = () => {
    return (
        <div className="w-full h-[567px] bg-[url('/bgca.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
            <Container>
                <div className="flex justify-center items-center flex-col">
                    <div className="flex gap-2 items-center justify-center">
                        <img src="/icon1.png" alt="" />
                        <h3 className="text-white font-dm-sans text-[20px] font-medium leading-[26px]">Let’s Support</h3>
                    </div>
                    <h2 className="text-white font-nunito text-[46px] font-bold leading-[56px] tracking-[0%] text-center mt-4 max-w-[648px]">You need our support to have  any projects?</h2>
                    <p className="text-white font-dm-sans text-[20px] font-medium leading-[26px] tracking-[0%] text-center mt-[30px] max-w-[832px]">Enthusiastically architect corporate metrics via enterprise methodologies. Progressively
                    extend distinctive process improvements rather than parallel channels.</p>

                    <div className="bottons  flex gap-[30px] items-center">
                        <Link className=" py-[15px] px-[33px] mt-9 text-white  border bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full inline-block transition-all duration-500">Set Free Quotes</Link>
                        <button className=" transition-all duration-500 py-[15px] px-[33px] mt-9 text-white  border border-[#FE651B]  hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full   ">Contact For Us</button>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default PriceSupport;