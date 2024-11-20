import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../shared/Image";


const TeamCard = ({ item }) => {
    const { id,image, name, role } = item;
    return (
        <div className="relative group overflow-hidden w-[342px] bg-white p-5  rounded-[30px] shadow-lg " >
            <div className=" rounded-[20px] w-[302px] h-[319px]">
             <Link to={`/team/${id}`}><Image src={image} alt={name} className="rounded-[20px]"></Image> </Link>   
            </div>

            <div className="text-center pt-5 ">
                <h3 className="font-sans text-[20px] font-semibold"> {name} </h3>
                <p className="font-sans font-normal text-[16px]">{role}</p>


            </div>
            <div className="flex justify-center items-center gap-3 w-[341px] h-[70px] bg-white duration-700 ease-in-out absolute -bottom-full left-0 group-hover:bottom-4">
                <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC] hover:text-white  bg-[#F4F4FF] hover:bg-blue-600 transition-all duration-500" >
                    <FaFacebookF className=" text-[20px]" />
                </Link>
                <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC] hover:text-white  bg-[#F4F4FF] hover:bg-blue-600 transition-all duration-500" >
                    <FaLinkedinIn className=" text-[20px]" />
                </Link>
                <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC] hover:text-white  bg-[#F4F4FF] hover:bg-blue-600 transition-all duration-500" >
                    <FaInstagram className=" text-[20px]" />
                </Link>
            </div>
        </div>
    );
};

export default TeamCard;