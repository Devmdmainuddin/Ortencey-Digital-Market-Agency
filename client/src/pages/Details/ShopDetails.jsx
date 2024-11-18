import { Rating } from '@smastrom/react-rating';
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import Image from '../../components/shared/Image';
import { RiShoppingBagLine } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const ShopDetails = () => {
    return (
        <div>
            <Bredcumb />
            <Container>
                <div className='flex gap-[10px] justify-between'>
                    <div className="image flex justify-center flex-col-reverse md:flex-row gap-[10px] ">
                        <div className='flex gap-6 flex-row md:flex-col'>
                            <div className='w-[144px] h-[134px] bg-[#f2f7f8] rounded-[5px] py-[22px] px-[36px]'>
                                <Image src="https://via.placeholder.com/500x500" alt="Placeholder Image" />
                            </div>
                            <div className='w-[144px] h-[134px] bg-[#f2f7f8] rounded-[5px] py-[22px] px-[36px]'>
                                <Image src="https://via.placeholder.com/500x500" alt="Placeholder Image" />
                            </div>
                            <div className='w-[144px] h-[134px] bg-[#f2f7f8] rounded-[5px] py-[22px] px-[36px]'>
                                <Image src="https://via.placeholder.com/500x500" alt="Placeholder Image" />
                            </div>
                            <div className='w-[144px] h-[134px] bg-[#f2f7f8] rounded-[5px] py-[22px] px-[36px]'>
                                <Image src="https://via.placeholder.com/500x500" alt="Placeholder Image" />
                            </div>
                        </div>
                        <div className='w-[496px] h-[568px] bg-[#f2f7f8] rounded-[5px] py-[56px] px-[66px]'>
                            <Image src="https://via.placeholder.com/500x500" alt="Placeholder Image" />
                        </div>

                    </div>
                    <div className="content">
                        <h2 className='text-[#1A1A1A] font-dm-sans text-[30px] font-medium leading-[40px] tracking-normal text-left capitalize'>Apple iPhone 14 Pro Max 128 GB Deep Purple</h2>
                        <div className=' font-dm-sans text-[14px] font-normal leading-[14px] flex items-center gap-1'>
                            <span className='text-[#3661FC]'>iPhone</span> / <span className='text-[#6B6161]'>Sold 22 Products </span> / <span className='flex items-center gap-1 text-[14px] font-normal text-[#6B6161]'> <Rating style={{ maxWidth: 86 }} value={5} className='mt-1 inline-block' /> 6 Reviews</span>
                        </div>
                        <p className='text-[#6B6161] font-medium text-[20px] leading-[24px] font-dm-sans mt-[30px]'> $2000 <span className='text-[#1A1A1A]'>$1800 </span></p>
                        <p className='text-[#0CA640] font-normal text-[16px] leading-[16px] font-dm-sans'>45 In stock</p>
                        <p className='text-[#6B6161] font-dm-sans text-base font-normal leading-[26px] mt-[30px]'>There are many variations of passages of Lorem Ipsum available, but our athe majority
                            have suffered alteration in some form, by injected humour, or randomised our words
                            which don{`'`}t look even slightly believable.</p>
                        <div className='flex gap-2 mt-[30px]'>
                            <div className="w-[144px]  border border-[#FE651B]  flex justify-between items-center py-[5px] px-3 rounded-full">
                                <span
                                    className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"

                                >
                                    <FaMinus />
                                </span>
                                <span className="inline-block   font-normal text-[#111111">5</span>
                                <span
                                    className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"  >
                                    <FaPlus />
                                </span>
                            </div>
                            
                            <button className='w-full md:max-w-[377px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52]  capitalize text-white font-dm-sans text-base font-medium leading-[26px] flex gap-3 items-center py-3 justify-center rounded-full '> <RiShoppingBagLine />add to cart</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ShopDetails;