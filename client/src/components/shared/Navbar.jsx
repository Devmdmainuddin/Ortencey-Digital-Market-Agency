import { useEffect, useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import Image from "./Image";
import { IoIosCall } from "react-icons/io";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF, FaInstagramSquare, FaLinkedin, } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
// IoMdClose,
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [proOpen, setProOpen] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'about',
            path: '/about'
        },
        {
            title: 'services',
            path: '/services'
        },
        {
            title: 'team',
            path: '/team'
        },
        {
            title: 'pages',
            path: '/pages'
        },
        {
            title: 'news',
            path: '/news'
        },
        {
            title: 'contact',
            path: '/contact'
        },
        {
            title: 'pricing',
            path: '/pricing'
        },
        {
            title: 'testimonials',
            path: '/testimonials'
        },

    ]
    useEffect(() => {
        function resize() {
            if (window.innerWidth < 767.99) {
                setProOpen(false)
                setShowMenu(false)
            }
        }
        resize()
        window.addEventListener("resize", resize)
    }, [])
    return (
        <div>
            <div className="py-2 px-3 bg-[#3661FC] text-white">
                <Container>
                    <div className="flex justify-between items-center text-white font-dm-sans text-[14px] font-normal leading-[26px]">
                        <div>

                            <ul className="flex gap-4">
                                <li>Welcome to Ortencey Digital Market Agency</li>
                                <li className="w-[1px] h-[26px] bg-[#708fff] hidden sm:inline-block"></li>
                                <li className="sm:flex gap-2 items-center hidden "><span><IoIosCall className="text-[#FE651B]" /></span>+88(5548)6548</li>
                                <li className="w-[1px] h-[26px] bg-[#708fff] hidden sm:inline-block"></li>
                                <li className="sm:flex gap-2 items-center hidden "><span><IoIosMail className="text-[#FE651B]" /></span> infoyour@gmail.com</li>
                            </ul>
                        </div>
                        <div className="hidden md:flex gap-3 items-center ">
                            <select name="" id="" className="bg-transparent ">
                                <option value="English">English</option>
                                <option value="Bangla">Bangla</option>

                            </select>
                            <div className="w-[1px] h-[26px] bg-[#708fff]"></div>
                            <div className="icons flex gap-3 items-center">
                                <Link to="#" className="  text-[#95ACFF]  hover:text-[#FE651B] transition-all duration-500"><FaFacebookF className="text-xl" /></Link>

                                <div className="w-[1px] h-[26px] bg-[#708fff]"></div> {/* <Link to="#" className="border border-[#007580] text-[#007580] rounded-full p-[11px] hover:bg-[#007580] hover:text-white transition-all duration-500"><FaTwitte /></Link> */}
                                <Link to="#" className=" text-[#95ACFF]  hover:text-[#FE651B] transition-all duration-500"><FaInstagramSquare className="text-xl" /></Link>
                                <div className="w-[1px] h-[26px] bg-[#708fff]"></div>
                                <Link to="#" className=" text-[#95ACFF]  hover:text-[#FE651B] rounded-full  p-[11px] transition-all duration-500"><FaLinkedin className="text-xl" /></Link>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className=" z-10 w-full  absolute " >
                <Container className=''>
                    <div className=" max-w-[1369px] mx-auto p-[17px] bg-white rounded-full  flex items-center justify-between ">
                        <div className="logo flex gap-4 items-center">
                            <div className="w-[66px] h-[66px]">
                                <Image src='/Icon.png' clt='logo image'></Image>
                            </div>

                            <div>
                                <h2 className="text-[22px] font-bold ">ORTENCEY</h2>
                                <h3 className="text-[15px] font-normal text-[#3661fc]">Digital Marketing</h3>
                            </div>

                        </div>
                        <nav className="hidden lg:inline-block">
                            <ul className={`flex gap-6 items-center`}>
                                {/* {links.map((link, index) => (
                                    <li key={index}>
                                        <NavLink to={link.path} className='border-b-2 pb-9 border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500'>{link.title}</NavLink>
                                    </li>
                                ))} */}
                                <li>
                                    <Link to="/" className='border-b-2 pb-9 border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500'>Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop" className='border-b-2 pb-9 border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500'>Shop</Link>
                                </li>
                                <li>
                                    <Link to="/about" className='border-b-2 pb-9 border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500'>about</Link>
                                </li>
                                <li>
                                    <Link to="/services" className='border-b-2 pb-9 border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500'>Services</Link>
                                </li>
                                <li>
                                    <Link to="/team" className='border-b-2 pb-9 border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500'>Team</Link>
                                </li>
                                <li className="group relative cursor-pointer ">
                                    <Link className='border-b-2 py-6 flex items-center justify-between border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500 gap-2'>Pages <IoIosArrowDown /> </Link>
                                    <div className="invisible absolute z-50 flex w-[180px] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                                    <Link to='/portfolio' className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    portfolio
                                        </Link>
                                        <Link to='/pricing' className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                            Pricing
                                        </Link>

                                        <Link to='/testimonials' className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                            Testimonial
                                        </Link>

                                        <Link to='/blogs' className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                            Blogs
                                        </Link>

                                        <Link to='/blogsRightSide' className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                            BlogRightSide
                                        </Link>

                                        <Link to='/blogsLeftSide' className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                            BlogLeftSide
                                        </Link>
                                        <Link to='/faq' className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                            Faq
                                        </Link>



                                    </div>
                                </li>


                                <li>
                                    <Link to="/news" className='border-b-2 pb-9 border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500'>News</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className='border-b-2 pb-9 border-white hover:text-[#FE651B] hover:border-[#FE651B] transition-all duration-500'>Contact</Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Profile */}
                        <div className=" hidden lg:flex  gap-6 items-center">
                            <button className="border border-[#3661fc] text-[#3661fc] text-xl bg-[#f4f4ff] p-4 rounded-full"><CiSearch /></button>
                            <button className="border-2 border-[#3661fc] text-[#3661fc] text-xl bg-[#f4f4ff] p-4 rounded-full relative"><AiOutlineShopping /> <span className="absolute top-1 -right-2 bg-[#3661fc] text-white text-[12px] rounded-full p-1 w-5 h-5  flex justify-center items-center">3</span></button>
                            <button className="hidden  text-white bg-[#3661fc] py-[15px] px-[29px] font-dm-sans text-[18px] font-normal leading-[26px] xl:flex items-center gap-4 rounded-full"> Free Quote  <FaArrowRightLong /></button>

                        </div>
                        {/* Hamburger */}
                        <div className="flex items-center gap-4 lg:hidden ">
                            {showMenu ? (
                                <HiMenuAlt1
                                    onClick={toggleMenu}
                                    className=" cursor-pointer transition-all mr-6"
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="cursor-pointer transition-all mr-6"
                                    size={30}
                                />
                            )}
                        </div>

                    </div>
                    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[278px] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-500 md:hidden rounded-r-xl shadow-md`} >
                        <div className="card">
                            <div onClick={() => setProOpen(!proOpen)} className="profile-menu">
                                {/* <Image src={user?.photoURL} className='rounded full' alt=''></Image> */}
                            </div>
                            <nav>
                                <ul className={`space-y-4 text-lg `}>
                                    {links.map((link, index) => (
                                        <li key={index} className="">
                                            <NavLink to={link.path} className="mb-2 inline-block  ">{link.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>


                        </div>
                        <div className="footer">

                        </div>
                    </div>
                </Container>

            </div>

        </div>
    );
};

export default Navbar;