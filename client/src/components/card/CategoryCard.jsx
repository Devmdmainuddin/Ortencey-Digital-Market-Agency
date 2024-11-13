import Image from "../shared/Image";


const CategoryCard = ({item}) => {
    const {name,icon,image,description}= item;
    return (
        <div>
            <div className="w-[342px] rounded-[48px] bg-slate-400">
            <div className="image relative w-[342px] h-[225px]">
                    <Image src={image} alt='' className='rounded-tl-[45px] rounded-tr-[45px]'></Image>
                    <div className="overlay h-[105px] w-[134px] border-b-[10px] border-r-[10px] rounded-tl-[45px] rounded-br-[55px] absolute top-0 left-0 bg-[#3661fc] flex justify-center items-center ">
                        <img src={icon} alt='' className=' w-12 h-12 '></img>
                    </div>
                </div>
                <div className="content bg-[#F4F4FE] rounded-bl-[48px] rounded-br-[48px] py-[30px] px-9">
                    <h2 className="text-[#1a1a1a] font-nunito text-[25px] font-bold leading-[34px]">{name}</h2>
                    <p className="text-[#6b6161] font-dm-sans text-[16px] font-normal leading-[26px] mt-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;