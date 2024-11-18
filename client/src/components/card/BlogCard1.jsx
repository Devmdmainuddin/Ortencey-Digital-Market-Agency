import { Link } from "react-router-dom";
import Image from "../shared/Image";
import { CiUser } from "react-icons/ci";
import { FaArrowRight, FaRegEye, FaRegMessage } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";


const BlogCard1 = ({ item }) => {
    const { image, title, category, totalComments, views, author, description } = item;
    return (
        <div className="w-full  bg-[#f3f3f4] rounded-[20px]">
            <div className="image rounded-[30px] w-full  h-auto sm:h-[450px]">
                <Image src={image} className="rounded-[30px]"></Image>


            </div>
            <div className="content py-6 px-[30px]">
                <div className="flex gap-6 items-center ">
                    <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><CiUser className="text-[#3661FC]" /> by {author}</p>
                    <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"> <FaRegMessage className="text-[#3661FC]" />{totalComments}</p>
                    <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><FaRegEye className="text-[#3661FC]" />{views} views</p>
                </div>
                <Link to='/blogsDetails'> <h2 className="mt-4 text-[#1A1A1A] hover:text-[#3661FC] font-nunito text-[25px] font-bold leading-[34px] text-left hover:underline transition-all duration-500">{title}</h2></Link>
                <p className="text-[#1a1a1a] font-dm-sans text-base font-normal leading-[26px] mt-[20px]">{description}</p>
                <div className="flex gap-[60px] items-center mt-6">
                    <div className="flex gap-2 items-center">
                        <img src="/bgca.jpg" alt="" className="w-[33px] h-[33px] rounded-full" />
                        <h3>{author}</h3>
                    </div>
                    <button className="flex items-center gap-6 text-[#6B6161] font-dm-sans text-[18px] font-normal leading-[26px] relative">Read More <FaArrowRight className="text-xl absolute right-5" /> <div className="w-[33px] h-[33px] rounded-full bg-gradient-to-r from-[#fc8e57] to-[#FFAA52]"></div></button>
                </div>

            </div>
        </div>
    );
};

export default BlogCard1;