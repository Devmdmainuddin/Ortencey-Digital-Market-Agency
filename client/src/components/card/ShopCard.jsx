import { Rating } from '@smastrom/react-rating'
import { RiShoppingBagLine } from "react-icons/ri";
import '@smastrom/react-rating/style.css'
import Image from '../../components/shared/Image'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addToCart } from '../../Featured/CartAPI/cartSlice';
import { useDispatch } from 'react-redux';
const ShopCard = ({item}) => {
    const dispatch = useDispatch();
    const handlecard = async i => {
        try {
            dispatch(addToCart({ ...i, qun: 1, }))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your items has been add to cart",
                showConfirmButton: false,
                timer: 1500
            });
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " product  cart not add  ",
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
    return (
        <div className="  bg-[#F4F4FE] p-[30px] rounded-[15px]">
            <div className="flex justify-between">
                <div>
                    <span className="bg-[#0065F6] text-white font-dm-sans text-xs font-normal leading-[10px] py-[5px] px-[9px] rounded-full ">new</span>
                </div>

                <div>
                    <p className="text-[#6b6161] font-dm-sans text-sm font-normal leading-[14px]">Reviews (18) </p>
                    <Rating style={{ maxWidth: 86 }} value={5} className='mt-1' />
                </div>

            </div>
            <div className="image w-[212px] h-[258px] rounded-[20px] mx-auto mt-[50px] mb-9">
                <Image src={item?.thumbnail} alt="Shop Card" className='w-full h-full object-cover rounded-[20px]' />
            </div>

            <Link to={`/product/${item?.id}`}> <h2 className='text-[#3661fc] font-dm-sans text-base font-medium leading-[26px]'>{item?.title}</h2> </Link>
            <p className='text-[#1a1a1a] font-dm-sans text-lg font-medium leading-[26px] mt-3'>${item?.price}</p>
            <button onClick={() => handlecard(item)} className='w-full bg-white capitalize text-[#3661fc] font-dm-sans text-base font-medium leading-[26px] flex gap-3 items-center py-3 justify-center rounded-full mt-[30px]'> <RiShoppingBagLine />add to cart</button>
        </div>
    );
};

export default ShopCard;