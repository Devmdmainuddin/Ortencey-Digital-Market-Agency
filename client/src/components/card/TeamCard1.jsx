import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../shared/Image";
const TeamCard1 = ({item}) => {
    const { image, name, role } = item;
    return (
        <div className="relative group overflow-hidden w-[342px]    rounded-[30px] shadow-lg " >
            <div className=" rounded-tl-[20px] rounded-tr-[20px]  w-[342px] h-[319px] bg-[#F4F4FE] p-5">
                <Image src={image} alt={name} className="rounded-[20px]"></Image>
            </div>

            <div className="text-center  bg-[#F4F4FE] p-5 group-hover:bg-white duration-700 ease-in-out">
             <Link to='/teamDetails'> <h3 className="font-sans text-[20px] font-semibold"> {name} </h3> </Link>   
                <p className="font-sans font-normal text-[16px]">{role}</p>


            </div>
            <div className="flex justify-center items-center gap-3 w-[341px] h-[70px] bg-[#F4F4FE] duration-700 ease-in-out absolute -bottom-full left-0 group-hover:bottom-[96px] rounded-bl-[20px] rounded-br-[20px]">
                <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC] hover:text-white  bg-white hover:bg-blue-600 transition-all duration-500" >
                    <FaFacebookF className=" text-[20px]" />
                </Link>
                <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC]  hover:text-white  bg-white hover:bg-blue-600 transition-all duration-500" >
                    <FaLinkedinIn className=" text-[20px]" />
                </Link>
                <Link className="w-[46px] h-[46px] rounded-full flex justify-center items-center text-[#3661FC] bg-white hover:text-white   hover:bg-blue-600 transition-all duration-500" >
                    <FaInstagram className=" text-[20px]" />
                </Link>
            </div>
        </div>
    );
};

export default TeamCard1;