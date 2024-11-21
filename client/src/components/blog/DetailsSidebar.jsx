
import { useState } from "react";
import Image from "../shared/Image";
import { CiCalendarDate, CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
const DetailsSidebar = ({categorey,tags,blogs}) => {
    const navigate = useNavigate();
  
    const handleCategoryFilter = (item) => {
        navigate(`/blogs?blogscategory=${encodeURIComponent(item)}`);
      };
    return (
        <div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">Search</h2>
                <div className="relative">
                    <input type="text" name="" id="" placeholder="Search" className="mt-6 text-white bg-gradient-to-r from-[#FE651B] to-[#FFAA52] py-[18px] px-5 w-full outline-0 " />
                    <span className="absolute top-1/2 -translate-y-1/1 right-5 flex justify-center items-center"><CiSearch className="text-white" /></span>
                </div>

            </div>


            <div className="p-10 border border-[#FE651B] rounded-[20px] group mt-[50px]">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">Categorys</h2>
                <ul className="mt-5">
                    {categorey.map((item, idx) => <li onClick={()=>handleCategoryFilter(item)} key={idx} className="flex justify-between items-center gap-3 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px] mt-3"><Link to="#">{item}</Link> <p className="flex-1 h-[1px] border border-dotted "></p> <span>(05)</span></li>)}
                </ul>
            </div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group mt-[50px]">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">Recent News</h2>
                {blogs.slice(0,3).map((item,idx)=> <div key={idx} >
                   <Link to={`/blog/${item.id}`} className="flex gap-3 mt-6"><div className="image w-[90px] h-[90px] bg-[#CCCCCC] rounded-[5px]">
                        <Image src={item.image}></Image>
                    </div>
                    <div className="content">
                        <h2>{item.title}</h2>
                        <p className="flex items-center gap-1"> <CiCalendarDate /> {item.createAt}</p>
                    </div> </Link>
                    

                </div>)}


            </div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group mt-[50px]">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">Popular Tags</h2>
                <ul className="flex gap-[18px] flex-wrap mt-10">
                    {tags.map((item,idx)=><li key={idx} ><Link href="#" className="text-[#6B6161] bg-[#F4F4FF] font-dm-sans text-[16px] font-normal leading-[26px] py-[7px] px-[20px] rounded-[5px]">{item}</Link></li>)}
                </ul>

            </div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group bg-[#525252]  mt-[50px]">
                <h2 className="text-white font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">Need Help</h2>
                <div className="mt-[66px]">
                    <h3 className="text-white font-nunito text-[25px] font-bold leading-[34px]">Help to Create Great Business
                        Agency Future</h3>
                    <p className="text-white font-dm-sans text-base font-normal leading-[26px] mt-[20px]">Sit amet consectetur adipiscing elseds do eius
                        mod tempor incididunt</p>
                </div>
                <button className='text-white font-nunito text-[16px] font-semibold leading-[16px] tracking-normal text-center py-[19px] px-6 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mt-10'>Contact Us</button>
            </div>
        </div>
    );
};

export default DetailsSidebar;