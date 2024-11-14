

const Work = ({item}) => {
    const {image,name,description,id} = item;
    return (
        <div className=" p-6 relative group w-[464px] h-[213px]">
                <div className="w-[135px] h-[135px] rounded-full bg-[#0064F6] group-hover:bg-[#FF783A] transition-all duration-500 absolute top-10 left-[40px]"></div>
                <div className="w-[95px] h-[95px] rounded-full bg-[#FF783A] group-hover:bg-[#0064F6] transition-all duration-500 absolute top-[68px] left-[65px] z-20 flex justify-center items-center">
                    <img src={image} alt="" className="w-[40px] h-[40px] " />
                </div>
                <div className="clip-custom-shape w-[464px] h-[213px] bg-white rounded-tr-[20px] rounded-br-[20px] ">
                    <div className=" ml-[125px] pt-[43px] pl-[31px]">
                        <h2 className="text-[#1A1A1A] group-hover:text-[#3661FC] transition-all duration-500 font-nunito text-[25px] font-bold leading-[34px] ">{name}</h2>
                        <p className="mt-4 mr-4 text-[#1A1A1A] font-normal text-[16px] leading-[26px]">{description}</p>
                    
                    </div>
                    <h2 className="ml-12 -mt-6 text-[#EDEDED] group-hover:text-[#3661FC] transition-all duration-500 font-nunito text-[46px] font-bold leading-[56px]">0{id}</h2>

                </div>
            </div>
    );
};

export default Work;