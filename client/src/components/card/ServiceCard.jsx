import { Link } from "react-router-dom";
import Image from "../shared/Image";

const ServiceCard = ({ item }) => {
    const { image, name, description, id } = item;
    return (
        <div className="group p-5 bg-[#F4F4FE] rounded-[50px] flex gap-6 justify-between flex-col lg:flex-row items-center border  hover:border-[#FE651B] transition-all duration-500">
            <div>
                <div className="w-full md:w-[390px] h-auto md:h-[197px] rounded-[50px] ">
                    <Image src={image} alt="" className="rounded-[50px] " />
                </div>
            </div>

            <div className="content">
                <h2 className="text-[#1A1A1A] group-hover:text-[#FE651B] transition-all duration-500 font-nunito text-[25px] font-bold leading-[34px] ">{name}</h2>
                <p className="mt-4 mr-4 text-[#1A1A1A] font-normal text-[16px] leading-[26px]">{description}</p>

            </div>
            <div className="bottons  ">
                <Link className="w-[155px] py-[15px] px-[33px] mt-9 text-[#1A1A1A] group-hover:text-white  border border-[#FE651B] group-hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mr-auto inline-block transition-all duration-500">Read More</Link>
            </div>
        </div>
    );
};

export default ServiceCard;