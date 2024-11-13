
import Container from "./Container";
import { Link } from "react-router-dom";


const Bredcumb = () => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    return (
        <div className="bg-[url('/ab.webp')] bg-cover bg-no-repeat h-[368px] md:h-[456px] lg:h-[654px] flex items-center justify-center ">
            <Container>
                <div className='py-8  md:py-[50px] '>

                    <h2 className='text-white font-inter text-[24px] font-semibold leading-[1.1] tracking-normal text-left capitalize mt-[14px]'> {pathSegments[0] ? pathSegments[0] : "Home"} </h2>
                    <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-white font-inter text-[14px] font-normal leading-[1.1] tracking-normal text-center capitalize'>
                            <Link to='/' className="text-sm md:text-xl" >Home</Link>
                            {pathSegments[0] && (
                                <>
                                    <span className="mx-1 md:mx-2"> - </span>
                                    <Link to={`/${pathSegments[0]}`} className="text-sm md:text-xl text-[#FE651B]">
                                        {pathSegments[0]}
                                    </Link>
                                </>
                            )}
                            {pathSegments[1] && (
                                <>
                                    <span className="mx-1 md:mx-2"> - </span>
                                    <Link to={`/${pathSegments[0]}/${pathSegments[1]}`} className="text-[#FE651B] font-inter text-[14px] font-medium leading-[1.1] tracking-normal text-center capitalize" >
                                        {pathSegments[1]}
                                    </Link>
                                </>
                            )}
                        </li>
                    </ul>

                </div>
            </Container>
        </div>
    );
};

export default Bredcumb;