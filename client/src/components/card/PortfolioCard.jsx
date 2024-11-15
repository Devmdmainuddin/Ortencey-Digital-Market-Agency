import { Link } from "react-router-dom";
import Image from "../shared/Image";
import { FaPlus } from "react-icons/fa6";


const PortfolioCard = ({ item }) => {
    const { image, title, category } = item;
    return (
        <div className="relative w-[464px] h-[462px] group flex flex-col justify-end bg-[#F4F4F4] rounded-bl-[50px] rounded-br-[50px]">
            <div className="image w-[464px] h-[462px]  duration-500 ease-in-out absolute top-0 left-0 group-hover:h-[365px]  ">
                <Image src={image} className='rounded-[20px] group-hover:rounded-bl-[50px] group-hover:rounded-br-[50px] duration-500 ease-in-out'></Image>
            </div>
            <div className="my-[30px] mx-[50px] group-hover:relative group-hover:visible opacity-0 group-hover:opacity-100 invisible transition-all duration-700 ease-in-out flex justify-between items-center">
                <div>
                    <Link to='/portfolioDetails'><h2 className="text-[#1a1a1a] font-dm-sans text-[20px] font-medium leading-[26px]">{title}</h2> </Link>
                    <p className="text-[rgb(107,97,97)]  text-[16px] font-normal leading-[26px]">{category}</p>
                </div>
                <Link to='/portfolioDetails'>     <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FE651B] to-[#FFAA52] flex justify-center items-center ">
                    <FaPlus className="text-white" />
                </div>
                </Link>
            </div>
        </div>
    );
};

export default PortfolioCard;