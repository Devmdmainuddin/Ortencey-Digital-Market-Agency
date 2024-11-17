
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
    return (
        <div>
            <Bredcumb />
            <Container>
                <div className='my-[120px] flex justify-between flex-wrap gap-6 flex-col md:flex-row'>
                    <main className='flex-1 '>

                        <table className="   w-full border-separate border-spacing-y-4">
                            {/* head */}
                            <thead className='bg-[#F4F4FF] '>
                                <tr className=''>
                                    <th className='text-start text-[26px] font-nunito text-[#1A1A1A]  capitalize tracking-normal leading-[18px] py-6 px-10'>Product</th>
                                    <th className='text-start text-[26px] font-nunito text-[#1A1A1A]  capitalize tracking-normal leading-[18px] py-6 px-10'>Price</th>
                                    <th className='text-start text-[26px] font-nunito text-[#1A1A1A]  capitalize tracking-normal leading-[18px] py-6 px-10'>Quantity</th>
                                    <th className='text-start text-[26px] font-nunito text-[#1A1A1A]  capitalize tracking-normal leading-[18px] py-6 px-10'>Total</th>
                                    <th className='text-start text-[26px] font-nunito text-[#1A1A1A]  capitalize tracking-normal leading-[18px] py-6 px-10'>Action</th>
                                </tr>
                            </thead>
                            <tbody className=''>

                                <tr >

                                    <th className='text-start '>
                                        <div className='flex gap-2 items-center'>
                                            <img className='w-10 h-10' src='/bgca.jpg' alt="cart product img" />
                                            <h2 className='text-[#6B6161] font-sans text-base font-normal leading-[18px] tracking-normal text-left capitalize'>Calculator Images Scientific Clipart+</h2>
                                        </div>


                                    </th>
                                    <td >
                                        <p className='text-[#6B6161] font-sans text-base font-normal leading-6'> $1500</p>

                                    </td>
                                    <td>
                                        <div className="w-[120px]   border border-[#D5D5D5]  flex justify-between items-center py-[5px] px-3 rounded-full">
                                            <span
                                                className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"

                                            >
                                                <FaMinus />
                                            </span>
                                            <span className="inline-block   font-normal text-[#111111">5</span>
                                            <span
                                                className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"  >
                                                <FaPlus />
                                            </span>
                                        </div>
                                    </td>
                                    {/* .toFixed(2) */}
                                    <td><p className='text-[#6B6161] font-sans text-base font-normal leading-6'> $1500</p></td>
                                    <th className='text-start '>
                                        <button

                                            // onClick={() => handleDelete(item.id)}
                                            className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600" /></button>
                                    </th>
                                </tr>
                                <tr className='pt-6'>

                                    <th className='text-start '>
                                        <div className='flex gap-2 items-center'>
                                            <img className='w-10 h-10' src='/bgca.jpg' alt="cart product img" />
                                            <h2 className='text-[#6B6161] font-sans text-base font-normal leading-[18px] tracking-normal text-left capitalize'>Calculator Images Scientific Clipart+</h2>
                                        </div>


                                    </th>
                                    <td >
                                        <p className='text-[#6B6161] font-sans text-base font-normal leading-6'> $1500</p>

                                    </td>
                                    <td>
                                        <div className="w-[120px]   border border-[#D5D5D5]  flex justify-between items-center py-[5px] px-3 rounded-full">
                                            <span
                                                className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"

                                            >
                                                <FaMinus />
                                            </span>
                                            <span className="inline-block   font-normal text-[#111111">5</span>
                                            <span
                                                className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"  >
                                                <FaPlus />
                                            </span>
                                        </div>
                                    </td>
                                    {/* .toFixed(2) */}
                                    <td><p className='text-[#6B6161] font-sans text-base font-normal leading-6'> $1500</p></td>
                                    <th className='text-start '>
                                        <button

                                            // onClick={() => handleDelete(item.id)}
                                            className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600" /></button>
                                    </th>
                                </tr>
                                <tr >

                                    <th className='text-start '>
                                        <div className='flex gap-2 items-center'>
                                            <img className='w-10 h-10' src='/bgca.jpg' alt="cart product img" />
                                            <h2 className='text-[#6B6161] font-sans text-base font-normal leading-[18px] tracking-normal text-left capitalize'>Calculator Images Scientific Clipart+</h2>
                                        </div>


                                    </th>
                                    <td >
                                        <p className='text-[#6B6161] font-sans text-base font-normal leading-6'> $1500</p>

                                    </td>
                                    <td>
                                        <div className="w-[120px]   border border-[#D5D5D5]  flex justify-between items-center py-[5px] px-3 rounded-full">
                                            <span
                                                className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"

                                            >
                                                <FaMinus />
                                            </span>
                                            <span className="inline-block   font-normal text-[#111111">5</span>
                                            <span
                                                className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"  >
                                                <FaPlus />
                                            </span>
                                        </div>
                                    </td>
                                    {/* .toFixed(2) */}
                                    <td><p className='text-[#6B6161] font-sans text-base font-normal leading-6'> $1500</p></td>
                                    <th className='text-start '>
                                        <button

                                            // onClick={() => handleDelete(item.id)}
                                            className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600" /></button>
                                    </th>
                                </tr>
                                <tr >

                                    <th className='text-start '>
                                        <div className='flex gap-2 items-center'>
                                            <img className='w-10 h-10' src='/bgca.jpg' alt="cart product img" />
                                            <h2 className='text-[#6B6161] font-sans text-base font-normal leading-[18px] tracking-normal text-left capitalize'>Calculator Images Scientific Clipart+</h2>
                                        </div>


                                    </th>
                                    <td >
                                        <p className='text-[#6B6161] font-sans text-base font-normal leading-6'> $1500</p>

                                    </td>
                                    <td>
                                        <div className="w-[120px]   border border-[#D5D5D5]  flex justify-between items-center py-[5px] px-3 rounded-full">
                                            <span
                                                className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"

                                            >
                                                <FaMinus />
                                            </span>
                                            <span className="inline-block   font-normal text-[#111111">5</span>
                                            <span
                                                className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"  >
                                                <FaPlus />
                                            </span>
                                        </div>
                                    </td>
                                    {/* .toFixed(2) */}
                                    <td><p className='text-[#6B6161] font-sans text-base font-normal leading-6'> $1500</p></td>
                                    <th className='text-start '>
                                        <button

                                            // onClick={() => handleDelete(item.id)}
                                            className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600" /></button>
                                    </th>
                                </tr>


                            </tbody>


                        </table>
                    </main>
                    <aside className='w-[342px] '>
                        <div className='flex justify-between'>
                            <button className='text-[#1A1A1A] font-nunito text-[16px] font-semibold leading-[16px] tracking-normal text-center py-[19px] px-6 bg-[#F4F4FF] rounded-full'>Continue Shopping</button>
                            <button className='text-[#1A1A1A] font-nunito text-[16px] font-semibold leading-[16px] tracking-normal text-center py-[19px] px-6 bg-[#F4F4FF] rounded-full'>Update Cart</button>
                        </div>

                        <hr className='my-6' />
                        <div className='flex justify-between'>
                            <h3 className='text-[#1A1A1A] font-nunito text-[16px] font-semibold leading-[24px]'>Subtotal</h3>
                            <p className='text-[#3661FC] font-nunito text-[16px] font-semibold leading-[24px]'> $1700</p>
                        </div>
                        <hr className='my-6' />
                        <div>
                            <h3 className='text-[#1A1A1A] font-nunito text-[16px] font-semibold leading-[24px]'>Shipping</h3>
                            <div>
                                <div className='flex gap-2 items-center justify-between mt-[17px]'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="radio" name="shipping" id="free" />
                                        <label htmlFor="free" className='text-[#696969] font-dm-sans text-[16px] font-normal leading-[24px]'>Free Shipping</label>
                                    </div>
                                    <p className='text-[#6B6161] font-nunito text-[16px] font-semibold leading-[24px]'> $0000</p>
                                </div>

                                <div className='flex gap-2 items-center justify-between mt-2'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="radio" name="shipping" id="flat" />
                                        <label htmlFor="flat" className='text-[#696969] font-dm-sans text-[16px] font-normal leading-[24px]'>Flat Rate</label>
                                    </div>
                                    <p className='text-[#6B6161] font-nunito text-[16px] font-semibold leading-[24px]'> $1700</p>
                                </div>

                                <div className='flex gap-2 items-center justify-between mt-2'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="radio" name="shipping" id="local" />
                                        <label htmlFor="local" className='text-[#696969] font-dm-sans text-[16px] font-normal leading-[24px]'>Local Delivery</label>
                                    </div>
                                    <p className='text-[#6B6161] font-nunito text-[16px] font-semibold leading-[24px]'> $1700</p>
                                </div>
                            </div>
                        </div>
                        <h3 className='text-[#1A1A1A] font-nunito text-[16px] font-semibold leading-[24px] mt-6'>Calculate Shipping</h3>
                        <div>
                            <select name="" id="" className='w-full text-[#1A1A1A] font-dm-sans text-[13px] font-normal leading-[24px] py-[19px] px-6 border border-[#F4F4FF] rounded-full outline-0 mt-5'>
                                <option value="">Select Country</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="australia">Australia</option>
                            </select>
                            <input type="text" name="" id="" placeholder='Postcode / ZIP' className='w-full text-[#1A1A1A] font-dm-sans text-[13px] font-normal leading-[24px] py-[19px] px-6 border border-[#F4F4FF] rounded-full outline-0 mt-5'/>
                        <button className='w-full text-[#1A1A1A] font-nunito text-[16px] font-semibold leading-[16px] tracking-normal text-center py-[19px] px-6 bg-[#F4F4FF] rounded-full mt-2.5'>Update Cart</button>
                        </div>
                        <hr className='my-6' />
                        <div className='flex justify-between'>
                            <h3 className='text-[#1A1A1A] font-nunito text-[16px] font-semibold leading-[24px]'>Total</h3>
                            <p className='text-[#3661FC] font-nunito text-[16px] font-semibold leading-[24px]'> $1700</p>
                        </div>
                        <button className='text-white font-nunito text-[16px] font-semibold leading-[16px] tracking-normal text-center py-[19px] px-6 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mt-10'>Proceed to Checkout</button>
                    </aside>

                </div>
            </Container>
        </div>
    );
};

export default Cart;