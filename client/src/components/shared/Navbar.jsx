import { useEffect, useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Image from "./Image";

import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

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

            <div className="relative z-10  w-full " >
                <Container className=''>

                    <div className="bg-slate-400 py-[17px] px-[18px] flex items-center justify-between rounded-tl-full rounded-bl-full">
                        <div className="logo flex gap-4 items-center">
                            <div className="w-[66px] h-[66px]">
                            <Image src='/Icon.png' clt='logo image'></Image>
                            </div>
                            
                            <div>
                                <h2>ORTENCEY</h2>
                                <h3 className="">Digital Marketing</h3>
                            </div>

                        </div>
                        <nav className="hidden md:inline-block">
                            <ul className={`flex gap-6 items-center`}>
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* Profile */}
                        <div className=" hidden md:flex w-12">
                            {/* <Image src={user?.photoURL || '/user.png'} className='rounded-full' alt=''></Image> */}
                            <Image src='/user.png' className='rounded full' alt=''></Image>
                        </div>
                        {/* Hamburger */}
                        <div className="flex items-center gap-4 md:hidden ">
                            {showMenu ? (
                                <HiMenuAlt1
                                    onClick={toggleMenu}
                                    className=" cursor-pointer transition-all"
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="cursor-pointer transition-all"
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
                                <ul className={`space-y-4 text-lg`}>
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.path} className="mb-2 inline-block">{link.title}</Link>
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