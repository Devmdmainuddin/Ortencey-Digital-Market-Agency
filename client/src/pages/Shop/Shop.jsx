import React from 'react';
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import Sidebar from '../../components/Shop/Sidebar';
import ShopCard from '../../components/card/ShopCard';

const Shop = () => {
    return (
        <div>
            <Bredcumb/>
         <Container>
         <div className="flex gap-6 justify-between flex-wrap my-[120px]">
                    <aside className="w-[342px]">
                        <Sidebar />

                    </aside>
                    <main className="flex-1 ">
                        <div className='flex justify-between mb-6'>
                            <p className='text-[#6b6161] font-dm-sans text-[16px] font-normal leading-[26px]'>Showing 1–16 of 17 results</p>
                        <select name="" id="" className='py-[17px] px-9 bg-[#F4F4FF] rounded-[5px]'>
                            <option value="">Sort by</option>
                            <option value="">Price (Low to High)</option>
                            <option value="">Price (High to Low)</option>
                            <option value="">Newest First</option>
                            <option value="">Best Selling</option>
                        </select>
                        </div>
                        <div className='flex flex-wrap justify-center gap-6'>

                        <ShopCard/>
                        <ShopCard/>
                        <ShopCard/>
                        <ShopCard/>
                        <ShopCard/>
                        <ShopCard/>



                        </div>
                  
                    </main>
                
            </div>
         </Container>
        </div>
    );
};

export default Shop;