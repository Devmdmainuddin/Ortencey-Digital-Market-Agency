import { Link } from "react-router-dom";
import Image from "../shared/Image";
import { CiCalendarDate, CiSearch } from "react-icons/ci";


const Sidebar = () => {
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
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500 ease-in-out">Categorys</h2>
                <ul className="mt-5">
                    <li className="flex justify-between items-center gap-3 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><Link to="#">Category 1</Link> <p className="flex-1 h-[1px] border border-dotted "></p> <span>(05)</span></li>
                    <li className="flex justify-between items-center gap-3 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><Link to="#">Category 2</Link> <p className="flex-1 h-[1px] border border-dotted "></p> <span>(05)</span></li>
                    <li className="flex justify-between items-center gap-3 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><Link to="#">Category 3</Link> <p className="flex-1 h-[1px] border border-dotted "></p> <span>(05)</span></li>
                    <li className="flex justify-between items-center gap-3 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><Link to="#">Category 4</Link> <p className="flex-1 h-[1px] border border-dotted "></p> <span>(05)</span></li>
                </ul>
            </div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group mt-[50px]">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500">Recent News</h2>
                <div className="flex gap-3 mt-6">
                    <div className="image w-[90px] h-[90px] bg-[#CCCCCC] rounded-[5px]">
                        <Image></Image>
                    </div>
                    <div className="content">
                        <h2>Successful business partners having a meetin</h2>
                        <p className="flex items-center"> <CiCalendarDate /> 15 Dec 2022</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-6">
                    <div className="image w-[90px] h-[90px] bg-[#CCCCCC] rounded-[5px]">
                        <Image></Image>
                    </div>
                    <div className="content">
                        <h2>Successful business partners having a meetin</h2>
                        <p className="flex items-center"> <CiCalendarDate /> 15 Dec 2022</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-6">
                    <div className="image w-[90px] h-[90px] bg-[#CCCCCC] rounded-[5px]">
                        <Image></Image>
                    </div>
                    <div className="content">
                        <h2>Successful business partners having a meetin</h2>
                        <p className="flex items-center"> <CiCalendarDate /> 15 Dec 2022</p>
                    </div>
                </div>


            </div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group mt-[50px]">
                <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500">Popular Tags</h2>
                <ul className="flex gap-[18px] flex-wrap mt-10">
                    <li ><Link href="#" className="text-[#6B6161] bg-[#F4F4FF] font-dm-sans text-[16px] font-normal leading-[26px] py-[7px] px-[20px] rounded-[5px]">Tag 1</Link></li>
                    <li ><Link href="#" className="text-[#6B6161] bg-[#F4F4FF] font-dm-sans text-[16px] font-normal leading-[26px] py-[7px] px-[20px]">Tag 1</Link></li>
                    <li ><Link href="#" className="text-[#6B6161] bg-[#F4F4FF] font-dm-sans text-[16px] font-normal leading-[26px] py-[7px] px-[20px]">Tag 1</Link></li>
                    <li ><Link href="#" className="text-[#6B6161] bg-[#F4F4FF] font-dm-sans text-[16px] font-normal leading-[26px] py-[7px] px-[20px]">Tag 1</Link></li>
                    <li ><Link href="#" className="text-[#6B6161] bg-[#F4F4FF] font-dm-sans text-[16px] font-normal leading-[26px] py-[7px] px-[20px]">Tag 1</Link></li>
                    <li ><Link href="#" className="text-[#6B6161] bg-[#F4F4FF] font-dm-sans text-[16px] font-normal leading-[26px] py-[7px] px-[20px]">Tag 1</Link></li>
                </ul>

            </div>
            <div className="p-10 border border-[#FE651B] rounded-[20px] group bg-[#525252]  mt-[50px]">
                <h2 className="text-white font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF] after:absolute after:-bottom-2.5 after:left-0   after:bg-red-500 after:w-[60px] after:h-[2px] after:rounded-full after:content-[''] group-hover:after:w-full transition-all duration-500">Need Help</h2>
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

export default Sidebar;