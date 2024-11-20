import React, { useEffect, useState } from 'react';
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import Sidebar from '../../components/Shop/Sidebar';
import ShopCard from '../../components/card/ShopCard';
import useProducts from '../../hooks/useProducts';

const Shop = () => {
    const [products]= useProducts()
    const [number, setNumber] = useState(6)
    const [item, setItem] = useState([])
    const [categorey, setCategorey] = useState([])
    const [brand, setBrand] = useState([])
    let [searchInput, setSearchInput] = useState("");
    let [searchFilter, setSearchFilter] = useState([]);





    const handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            setItem([])
        } else {
            const searchOne = products?.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setItem(searchOne)
        }
    }



    useEffect(() => {
        if (products) {
            setCategorey([... new Set(products?.map(item => item.category))])
            setBrand([... new Set(products?.map(item => item.brand))])
            // setColors([... new Set(data?.map(item => item.color))])
            // setDiscount([... new Set(data?.map(item => item.discount))])
            setItem(products)
        }
    }, [products])
    const handleCategoryfilter = filter => {
        const filterItem = products?.filter(item => item.category === filter);
        setItem(filterItem);
    }
    const handleBrandfilter = filter => {
        const filterItem = products?.filter(item => item.brand === filter);
        setItem(filterItem);
    }

    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="flex gap-6 justify-between flex-wrap my-[120px]">
                    <aside className="w-[342px]">
                        <Sidebar categorey={categorey} brand={brand} handleCategoryfilter={handleCategoryfilter} handleBrandfilter={handleBrandfilter} searchInput={searchInput} handleInput={handleInput}/>

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
                          {item.map((item,idx)=><ShopCard key={idx} item={item}/>)}
                          
                            
                        </div>

                    </main>

                </div>
            </Container>
        </div>
    );
};

export default Shop;