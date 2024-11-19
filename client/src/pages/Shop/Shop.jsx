import React, { useEffect, useState } from 'react';
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import Sidebar from '../../components/Shop/Sidebar';
import ShopCard from '../../components/card/ShopCard';
import useProducts from '../../hooks/useProducts';

const Shop = () => {
    const [products]= useProducts()
    const [categorey, setCategorey] = useState([])
    const [brand, setBrand] = useState([])
    useEffect(() => {
        if (products) {
            setCategorey([... new Set(products?.map(item => item.category))])
            setBrand([... new Set(products?.map(item => item.brand))])
            // setColors([... new Set(data?.map(item => item.color))])
            // setDiscount([... new Set(data?.map(item => item.discount))])
            // setItem(data)
        }

    }, [products])


    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="flex gap-6 justify-between flex-wrap my-[120px]">
                    <aside className="w-[342px]">
                        <Sidebar categorey={categorey} brand={brand}/>

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
                          {products.map((item,idx)=><ShopCard key={idx} item={item}/>)}
                          
                            
                        </div>

                    </main>

                </div>
            </Container>
        </div>
    );
};

export default Shop;