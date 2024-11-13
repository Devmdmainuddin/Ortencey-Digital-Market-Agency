import { FaRegMessage } from "react-icons/fa6";
import Image from "../shared/Image";
import { CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

const BlogCard = ({item}) => {
    const {image,title,category,totalComments,views,author,createAt} = item;
    return (
        <div className="w-full sm:w-[464px] bg-[#F4F4FF] rounded-[30px]">
            <div className="image rounded-[30px] w-full sm:w-[464px] h-auto sm:h-[387px] relative">
                <Image src={image} className="rounded-[30px]"></Image>
               <div className="z-20  absolute bottom-0 left-0 w-[116px] rounded-[30px] p-[23px] text-white bg-[#3661FC] flex justify-center items-center">
               <p className=" font-dm-sans text-lg font-medium leading-6  ">{createAt ? (new Date(createAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })) : "Invalid Date"}</p>
                </div> 
                <p className="z-0 absolute bottom-0 left-[80px] pl-12 px-4 py-[6px] text-white bg-[#5383E8] rounded-full ">{category}</p>
            </div>
            <div className="content py-6 px-[30px]">
                <div className="flex gap-6 items-center ">
                   <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><CiUser className="text-[#3661FC]"/> by {author}</p> 
                   <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"> <FaRegMessage className="text-[#3661FC]"/>{totalComments}</p>
                   <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><FaRegEye className="text-[#3661FC]"/>{views} views</p>
                </div>
                <h2 className="mt-4 text-[#1A1A1A] hover:text-[#3661FC] font-nunito text-[25px] font-bold leading-[34px] text-left hover:underline transition-all duration-500">{title}</h2>
            </div>
        </div>
    );
};

export default BlogCard;