import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";

const CheckOut = () => {
    return (
        <div className="">
            <Bredcumb />
            <Container>
                <div className="flex gap-6 justify-between my-[66px] flex-wrap">
                    <main className="p-[60px] bg-[#F4F4FF] rounded-[20px]">
                        <h2>Billing Details</h2>
                        <form action="" className="max-w-[608px] flex justify-center items-center flex-col gap-5 mt-10 ">
                            <div className="flex justify-between flex-col md:flex-row items-center gap-5 w-full">
                                <input type="text" name="fname" id="" placeholder="First Name*" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                <input type="text" name="lname" id="" placeholder="Last Name*" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            </div>
                            <div className="flex justify-between flex-col md:flex-row items-center gap-5 w-full">
                                <input type="email" name="" id="" placeholder="Email Address*" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                                <input type="number" name="" id="" placeholder="Phone Number*" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            </div>

                            <select name="" id="" placeholder="Business Topic" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" >
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                            </select>
                            <input type="text" name="address*" id="" placeholder="Address*" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            <div className="flex justify-between items-center gap-5 w-full">

                                <select name="" id="" placeholder="Your Name" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]">
                                    <option value="Manhattan">Manhattan</option>
                                    <option value="Bronx">Bronx</option>
                                    <option value="Brooklyn">Brooklyn</option>
                                    <option value="Queens">Queens</option>
                                    <option value="Staten Island">Staten Island</option>
                                </select>
                                <input type="number" name="" id="" placeholder="Postcode / ZIP*" className="py-[15px] px-[26px] text-gray-500 font-dm-sans text-base font-normal leading-7 w-full outline-0 rounded-[40px]" />
                            </div>
                            <div className=" w-full">
                                <div className="flex gap-2 justify-start">
                                    <input type="checkbox" name="account" id="account" />
                                    <label htmlFor="account" className="text-[#696969] font-dm-sans text-[16px] font-normal leading-[18px] text-left capitalize">Create an account?</label>

                                </div>
                            </div>
                            <div className=" w-full">
                                <h2 className="text-[#1A1A1A] font-nunito text-[20px] font-bold leading-[24px] text-left capitalize"> Shipping Address</h2>
                                <div className="flex gap-2 justify-start mt-3">
                                    <input type="checkbox" name="account" id="account" />
                                    <label htmlFor="account" className="text-[#696969] font-dm-sans text-[16px] font-normal leading-[18px] text-left capitalize">Create an account?</label>

                                </div>
                            </div>



                        </form>
                    </main>
                    <aside className="w-[586px]">
                        <h2 className="text-[#1A1A1A] font-nunito text-[26px] font-bold leading-[26px] text-left capitalize">Order Summary</h2>
                        <div className="py-[30px] px-10">
                            <div className='flex justify-between mt-4'>
                                <h3 className='text-[#1A1A1A] font-nunito text-[20px] font-semibold leading-[24px]'>product</h3>
                                <p className='text-[#1A1A1A] font-nunito text-[20px] font-semibold leading-[24px]'> total</p>
                            </div>
                            <hr className='my-4' />
                            <div className="flex justify-between items-center">
                                <h3 className='text-[#6B6161] font-dm-sans text-[13px] font-normal leading-[26px]'>Orca is an armchair1</h3>
                                <p className='text-[#6B6161] font-dm-sans text-[13px] font-normal leading-[26px]'>$100</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className='text-[#6B6161] font-dm-sans text-[13px] font-normal leading-[26px]'>Orca is an armchair1</h3>
                                <p className='text-[#6B6161] font-dm-sans text-[13px] font-normal leading-[26px]'>$100</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className='text-[#6B6161] font-dm-sans text-[13px] font-normal leading-[26px]'>Orca is an armchair1</h3>
                                <p className='text-[#6B6161] font-dm-sans text-[13px] font-normal leading-[26px]'>$100</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className='text-[#6B6161] font-dm-sans text-[13px] font-normal leading-[26px]'>Orca is an armchair1</h3>
                                <p className='text-[#6B6161] font-dm-sans text-[13px] font-normal leading-[26px]'>$100</p>
                            </div>

                            <hr className='my-4' />
                            <div className='flex justify-between mt-4'>
                                <h3 className='text-[#1A1A1A] font-nunito text-[20px] font-semibold leading-[24px]'>Subtotal</h3>
                                <p className='text-[#1A1A1A] font-nunito text-[20px] font-semibold leading-[24px]'> $1700</p>
                            </div>
                            <h3 className="text-[#1A1A1A] font-dm-sans text-[13px] font-normal leading-[26px] mt-[17px]">shiping</h3>
                            <div className="flex justify-between items-center">
                                <h3 className='text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]'>Free Shipping</h3>
                                <p className='text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]'>$000</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className='text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]'>Flat Rate</h3>
                                <p className='text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]'>$100</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className='text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]'>Local Delivery</h3>
                                <p className='text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]'>$100</p>
                            </div>

                            <hr className='my-4' />
                            <div className='flex justify-between mt-4'>
                                <h3 className='text-[#1A1A1A] font-nunito text-[20px] font-semibold leading-[24px]'>total</h3>
                                <p className='text-[#3661FC] font-nunito text-[20px] font-semibold leading-[24px]'> $1700</p>
                            </div>
                            <div>
                               
                                    <div className='flex gap-2 py-6 px-5 bg-[#F4F4FF] mt-[30px] rounded-[20px]'>
                                        <input type="radio" name="shipping" id="free" />
                                        <label htmlFor="free" className='text-[#696969] font-dm-sans text-[16px] font-normal leading-[24px] flex flex-col gap-2'>Direct Bank Transfer <span>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</span></label>
                                    </div>
                                  

                               
                                    <div className='flex gap-2 items-center mt-6'>
                                        <input type="radio" name="shipping" id="flat" />
                                        <label htmlFor="flat" className='text-[#696969] font-dm-sans text-[16px] font-normal leading-[24px]'>Cash on Delivery</label>
                                    </div>
                                   
                                

                              
                                    <div className='flex gap-2 items-center mt-6'>
                                        <input type="radio" name="shipping" id="local" />
                                        <label htmlFor="local" className='text-[#696969] font-dm-sans text-[16px] font-normal leading-[24px]'>Credit/Debit Cards or Paypal</label>
                                    </div>
                                  
                            </div>
                            <button className="py-4 w-full mt-9  text-white bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full ">Place Order Now</button>
                        </div>

                    </aside>
                </div>
            </Container>
        </div>
    );
};

export default CheckOut;