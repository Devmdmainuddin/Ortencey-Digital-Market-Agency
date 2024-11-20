import { Rating } from '@smastrom/react-rating';
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import Image from '../../components/shared/Image';
import { RiShoppingBagLine, } from 'react-icons/ri';
import { FaFacebookF, FaFlag, FaMinus, FaPinterest, FaPlus, FaTwitter, } from 'react-icons/fa6';
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShopCard from '../../components/card/ShopCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation, } from 'swiper/modules';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Featured/CartAPI/cartSlice';
import { useEffect, useState } from 'react';
const ShopDetails = () => {
  const products = useLoaderData();
  const [quntity, setQuntity] = useState(1)
  const [relatedProducts,setRelatedProducts] = useState([])
  const { id } = useParams();
  const product = products.find(item => item.id == parseInt(id));
  useEffect(() => {
    const newpro = products?.filter(items => items.category === product.category);
    setRelatedProducts(newpro);
  }, [products,product.category]);
  console.log(product);
  const dispatch = useDispatch();
  const handlecard = async i => {
    try {
      dispatch(addToCart({ ...i, qun: quntity, }))
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
    <div>
      <Bredcumb />
      <Container>
        <div className='flex gap-[10px] justify-between flex-col lg:flex-row mt-[120px]'>
          <div className="image flex justify-center flex-col-reverse lg:flex-row gap-[10px] ">
            <div className='flex gap-[10px] flex-row lg:flex-col'>
              <div className='w-[144px] h-[134px] bg-[#f2f7f8] rounded-[5px] py-[22px] px-[36px]'>
                <Image src={product.thumbnail} alt="Placeholder Image" />
              </div>
              <div className='w-[144px] h-[134px] bg-[#f2f7f8] rounded-[5px] py-[22px] px-[36px]'>
                <Image src={product.thumbnail} alt="Placeholder Image" />
              </div>
              <div className='w-[144px] h-[134px] bg-[#f2f7f8] rounded-[5px] py-[22px] px-[36px]'>
                <Image src={product.thumbnail} alt="Placeholder Image" />
              </div>
              <div className='w-[144px] h-[134px] bg-[#f2f7f8] rounded-[5px] py-[22px] px-[36px]'>
                <Image src={product.thumbnail} alt="Placeholder Image" />
              </div>
            </div>
            <div className='w-[496px] h-[568px] bg-[#f2f7f8] rounded-[5px] py-[56px] px-[66px]'>
              <Image src={product.thumbnail} alt="Placeholder Image" />
            </div>

          </div>
          <div className="content">
            <h2 className='text-[#1A1A1A] font-dm-sans text-[30px] font-medium leading-[40px] tracking-normal text-left capitalize'>{product.title}</h2>
            <div className=' font-dm-sans text-[14px] font-normal leading-[14px] flex items-center gap-1'>
              <span className='text-[#3661FC]'>iPhone</span> / <span className='text-[#6B6161]'>Sold 22 Products </span> / <span className='flex items-center gap-1 text-[14px] font-normal text-[#6B6161]'> <Rating style={{ maxWidth: 86 }} value={5} className='mt-1 inline-block' /> 6 Reviews</span>
            </div>
            <p className='text-[#6B6161] font-medium text-[20px] leading-[24px] font-dm-sans mt-[30px]'> $2000 <span className='text-[#1A1A1A]'>${product.price} </span></p>
            <p className='text-[#0CA640] font-normal text-[16px] leading-[16px] font-dm-sans'>45 In stock</p>
            <p className='text-[#6B6161] font-dm-sans text-base font-normal leading-[26px] mt-[30px]'>{product.description}</p>
            <div className='flex gap-2 mt-[30px]'>
              <div className="w-[144px]  border border-[#FE651B]  flex justify-between items-center py-[5px] px-3 rounded-full">
                <span
                  onClick={() => setQuntity(quntity > 1 ? quntity - 1 : quntity)}
                  className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"

                >
                  <FaMinus />
                </span>
                <span className="inline-block   font-normal text-[#111111">{quntity}</span>
                <span
                  onClick={() => setQuntity(quntity + 1)}
                  className="cursor-pointer inline-block  font-normal text-[#9A9A9A]"  >
                  <FaPlus />
                </span>
              </div>

              <button onClick={() => handlecard(product)} className='w-full md:max-w-[377px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52]  capitalize text-white font-dm-sans text-base font-medium leading-[26px] flex gap-3 items-center py-3 justify-center rounded-full '> <RiShoppingBagLine />add to cart</button>
            </div>
            <div className='flex gap-3 items-center my-[22px]'>
              <button className='text-[#6B6161] font-dm-sans text-base font-normal leading-[18px] tracking-[0%] text-center capitalize flex gap-2 items-center'><CiHeart className='text-xl' /> add to wishlist</button>
              <button className='text-[#6B6161] font-dm-sans text-base font-normal leading-[18px] tracking-[0%] text-center capitalize flex gap-2 items-center'><IoGitCompareOutline />Compare</button>
            </div>
            <hr />
            <h3 className='font-medium text-[16px] leading-[16px] text-[#1A1A1A] my-3'>SKU : <span className='text-[#6A6C73]'>KE-91039</span> </h3>
            <h3 className='font-medium text-[16px] leading-[16px] text-[#1A1A1A] my-3'>Category : <span className='text-[#6A6C73]'> Mobile</span> </h3>
            <p className='text-[#f03333] font-normal text-[16px] leading-[16px] flex gap-2 items-center'> <FaFlag /> Report This Item</p>
            <div className='flex gap-3 items-center'>
              <h3 className='font-medium text-[16px] leading-[16px] text-[#1A1A1A] my-3'>Share</h3>
              <div className='flex gap-3 items-center'>
                <Link to='#' className='text-[#2276AF]'><FaFacebookF /></Link>
                <Link to='#' className='text-[#F2142D]'><FaPinterest /></Link>
                <Link to='#' className='text-[#00D3FC]'>< FaTwitter /></Link>

              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <Tabs className='mt-[120px]'>
          <TabList className=" flex gap-2 md:gap-16 flex-wrap items-center text-xl pt-3  border-t border-b border-[#F4F4FF]">
            <Tab className='text-[#6B6161] font-dm-sans text-[20px] font-medium leading-[30px] outline-0 pb-3'>Description</Tab>
            <Tab className='text-[#6B6161] font-dm-sans text-[20px] font-medium leading-[30px] outline-0 pb-3'>Additional information </Tab>
            <Tab className='text-[#6B6161] font-dm-sans text-[20px] font-medium leading-[30px] outline-0 pb-3'>Reviews 04</Tab>
          </TabList>

          <TabPanel>
            <div className='my-6'>

              <p className='text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <ul className=' mt-2 md:mt-4 list-disc list-inside'>
                <li className='text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans'> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li className='text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans'> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li className='text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans'> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li className='text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans'> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li className='text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans'> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>

              </ul>
              <p className='text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans mt-3'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
          </TabPanel>
          <TabPanel>
            <p className='py-6 text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans flex justify-between items-center border-b border-[#F4F4FF]'><span className='text-[#1A1A1A] font-medium text-[16px] leading-[26px] font-dm-sans'>Screen</span> 6.7{`"`} LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)</p>
            <p className='py-6 text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans flex justify-between items-center border-b border-[#F4F4FF]'><span className='text-[#1A1A1A] font-medium text-[16px] leading-[26px] font-dm-sans'>Memory</span> RAM 6 GB, ROM 256 GB</p>
            <p className='py-6 text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans flex justify-between items-center border-b border-[#F4F4FF]'><span className='text-[#1A1A1A] font-medium text-[16px] leading-[26px] font-dm-sans'>weight</span> 240 gm</p>
            <p className='py-6 text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans flex justify-between items-center border-b border-[#F4F4FF]'><span className='text-[#1A1A1A] font-medium text-[16px] leading-[26px] font-dm-sans'>Processor</span> 6 core Apple A16 Bionic (4 nm) Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)</p>
            <p className='py-6 text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans flex justify-between items-center border-b border-[#F4F4FF]'><span className='text-[#1A1A1A] font-medium text-[16px] leading-[26px] font-dm-sans'>GPU</span> Apple GPU (5-core graphics)  </p>
            <p className='py-6 text-[#6B6161] font-normal text-[16px] leading-[26px] font-dm-sans flex justify-between items-center border-b border-[#F4F4FF]'><span className='text-[#1A1A1A] font-medium text-[16px] leading-[26px] font-dm-sans'>Camera</span> 48 MP, f/1.8, 24mm (wide), 1/1.28{`"`}, 1.22m, 12 MP, f/2.8, 77mm (telephoto), 1/3.5{`"`}, PDAF</p>
          </TabPanel>
          <TabPanel>

            <div className=" mt-[30px]  flex justify-between items-center border border-[#F4F4FF] p-[33px]">

              <div className="max-w-[668px]  flex gap-7 items-center">
                <div>
                  <div className="image w-[68px] h-[68px] rounded-full">
                    <img src='' alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                <div className="content w-full">
                  <h2 className="text-[#363385] text-sm md:text-lg font-josefin font-semibold">Abubokkor Siddik</h2>
                  <span className="text-[#A3A2B6] text-[12px] font-normal">Nov 14, 2022</span>
                  <p className="text-[12px] font-normal font-josefin">Simply dummy text of the printing and typesetting industry. Lorem Ipsium has been the industry{`'`}s standards dummy</p>
                </div>

              </div>
              <div className='flex gap-2'>
                <Rating
                  style={{ maxWidth: 96, fontSize: 4 }}
                  value={4}
                  className='text-[5px]'
                  readOnly
                />
                <p className='text-[#6B6161] font-normal text-[13px] leading-[24px] font-dm-sans'>(0)</p>
              </div>

            </div>
            <div className=" mt-[30px]  flex justify-between items-center border border-[#F4F4FF] p-[33px]">

              <div className="max-w-[668px]  flex gap-7 items-center">
                <div>
                  <div className="image w-[68px] h-[68px] rounded-full">
                    <img src='' alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                <div className="content w-full">
                  <h2 className="text-[#363385] text-sm md:text-lg font-josefin font-semibold">Abubokkor Siddik</h2>
                  <span className="text-[#A3A2B6] text-[12px] font-normal">Nov 14, 2022</span>
                  <p className="text-[12px] font-normal font-josefin">Simply dummy text of the printing and typesetting industry. Lorem Ipsium has been the industry{`'`}s standards dummy</p>
                </div>

              </div>
              <div className='flex gap-2'>
                <Rating
                  style={{ maxWidth: 96, fontSize: 4 }}
                  value={4}
                  className='text-[5px]'
                  readOnly
                />
                <p className='text-[#6B6161] font-normal text-[13px] leading-[24px] font-dm-sans'>(0)</p>
              </div>

            </div>
            <div className=" mt-[30px]  flex justify-between items-center border border-[#F4F4FF] p-[33px]">

              <div className="max-w-[668px]  flex gap-7 items-center">
                <div>
                  <div className="image w-[68px] h-[68px] rounded-full">
                    <img src='' alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                <div className="content w-full">
                  <h2 className="text-[#363385] text-sm md:text-lg font-josefin font-semibold">Abubokkor Siddik</h2>
                  <span className="text-[#A3A2B6] text-[12px] font-normal">Nov 14, 2022</span>
                  <p className="text-[12px] font-normal font-josefin">Simply dummy text of the printing and typesetting industry. Lorem Ipsium has been the industry{`'`}s standards dummy</p>
                </div>

              </div>
              <div className='flex gap-2'>
                <Rating
                  style={{ maxWidth: 96, fontSize: 4 }}
                  value={4}
                  className='text-[5px]'
                  readOnly
                />
                <p className='text-[#6B6161] font-normal text-[13px] leading-[24px] font-dm-sans'>(0)</p>
              </div>

            </div>
            <div>
              <h2 className='text-[#1A1A1A] font-medium text-[20px] leading-[30px] tracking-normal text-left capitalize font-dm-sans'>Write Your Reviews</h2>
              <div className='flex gap-2'>
                <Rating
                  style={{ maxWidth: 96, fontSize: 4 }}
                  value={4}
                  className='text-[5px]'
                  readOnly
                />
                <p className='text-[#6B6161] font-normal text-[13px] leading-[24px] font-dm-sans'>(0)</p>
              </div>
              <form className='mt-[46px] md:my-[120px] max-w-[717px]'>
                <div className=" flex flex-col md:flex-row justify-between gap-6 items-center">
                  <input name="name" className=" w-full   py-[13px] pl-[30px] border outline-0 rounded-full" type="text" placeholder="Name*" />
                  <input name="number" className=" w-full  py-[13px] pl-[30px] border outline-0 rounded-full" type="email" placeholder="Phone Number*" />
                </div>
                <input name="email" className=" w-full mt-5  py-[13px] pl-[30px] border outline-0 rounded-full" type="email" placeholder=" Email* " />
                <textarea name="review" className="inputtext w-full mt-5 h-[208px]  py-[13px] pl-[20px] border outline-0 resize-none rounded-[20px]" cols="30" rows="10" placeholder=" Your Message  "></textarea>


                <button className='text-white font-nunito text-[16px] font-semibold leading-[16px] tracking-normal text-center py-[15px] px-[33px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mt-10'>Submit Review</button>
              </form>
            </div>

          </TabPanel>

        </Tabs>
        {/* similar projects */}
        <div className="my-[120px]">
          <p className='text-[#3661fc] font-dm-sans text-base font-normal leading-[26px]'>Products</p>
          <h2 className="text-[#1a1a1a] text-[46px] font-bold leading-[56px] font-nunito ">Related Products</h2>
          <div className="">
            <Swiper
              loop={true}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                346: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },

                726: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
                1300: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                },
              }}
              spaceBetween={10}

              className="mySwiper Popular"
            >

              {relatedProducts.map((item,idx)=> <SwiperSlide key={idx}>
                <ShopCard item={item}/>
              </SwiperSlide>)}
         



            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopDetails;