import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Sidebar = ({categorey,brand}) => {

    return (
        <div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500">Search</h2>
                <div className="relative">
                    <input type="text" name="" id="" placeholder="Search" className="mt-6 text-white bg-gradient-to-r from-[#FE651B] to-[#FFAA52] py-[18px] px-5 w-full outline-0 " />
                    <span className="absolute top-1/2 -translate-y-1/1 right-5 flex justify-center items-center"><CiSearch className="text-white" /></span>
                </div>

            </div>


            
            <div className="p-10 border border-[#FE651B] rounded-[20px] group mt-[50px]">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500 ease-in-out">Product categories</h2>
                <ul className="mt-5 list-disc list-inside">
                    {categorey.map((item,idx)=>  <li key={idx} className="flex justify-between items-center gap-3 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><Link to="#">{item}</Link> <p className="flex-1 h-[1px] border border-dotted "></p> <span>(05)</span></li>)}
                </ul>
            </div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group mt-[50px]">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500 ease-in-out">Product brand</h2>
                <ul className="mt-5 list-disc list-inside">
                    {brand.map((item,idx)=>  <li key={idx} className="flex justify-between items-center gap-3 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><Link to="#">{item}</Link> <p className="flex-1 h-[1px] border border-dotted "></p> <span>(05)</span></li>)}
                </ul>
            </div>

            <div className="p-10 border border-[#FE651B] rounded-[20px] group mt-[50px]">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500 ease-in-out">Availability</h2>
                <ul className="list-disc list-inside mt-[20px]">
                    <li className="text-[#6b6161] font-dm-sans text-base font-normal leading-[34px] flex justify-between">In Stock <span>(3560)</span></li>
                    <li className="text-[#6b6161] font-dm-sans text-base font-normal leading-[34px] flex justify-between">Out of Stock <span>(260)</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;