import { CiUser } from "react-icons/ci";
import Sidebar from "../../components/blog/Sidebar";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import Image from "../../components/shared/Image";
import { FaCheck, FaFacebookF, FaLinkedin, FaRegEye, FaRegMessage, FaTwitter } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { Link, useLoaderData, useParams } from "react-router-dom";
import BlogCard from "../../components/card/BlogCard";
import { FaInstagramSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import DetailsSidebar from "../../components/blog/DetailsSidebar";


const BlogDetails = () => {
    const blogs = useLoaderData();
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [categorey, setCategorey] = useState([])
    const [tags, setTags] = useState([])
    const { id } = useParams();
    const blog = blogs.find(item => item.id == parseInt(id));

    useEffect(() => {
        const newpro = blogs?.filter(items => items.category === blog.category);
        setRelatedBlogs(newpro);
      }, [blogs,blog.category]);

      useEffect(() => {
        if (blogs) {
            setCategorey([... new Set(blogs?.map(item => item.category))])
            setTags([... new Set(blogs?.map(item => item.tags))])
        }
    }, [blogs])

    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="flex gap-6 justify-between flex-wrap my-[120px]">
                    <main className="flex-1">
                        {/* ........ */}
                        <div className="h-[450px]">
                            <Image src={blog.image} className='rounded-[20px] border-[10px] border-[#F4F4FE]'></Image>
                        </div>
                        {/* ........ */}
                        <div className="flex gap-6 items-center mt-3">
                            <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><TbSpeakerphone className="text-[#3661FC]" /> {blog.category}</p>
                            <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"> <FaRegMessage className="text-[#3661FC]" />{blog.totalComments}</p>
                            <p className="flex items-center gap-1 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]"><FaRegEye className="text-[#3661FC]" />{blog.views} views</p>
                        </div>
                        {/* ........ */}
                        <div className="content mt-[33px]">
                            <h2 className="text-[#1A1A1A] font-nunito text-[25px] font-bold leading-[34px]">{blog.title}</h2>
                            <p className="mt-5 text-[#6B6161] font-dm-sans text-base font-normal leading-6">{blog.description}</p>
                        </div>
                        {/* ........ */}
                        <div className="py-[22px] px-[30px] bg-[#F4F4FE] flex gap-3 mt-9 rounded-[20px]">
                            <div>
                                <div className="image w-[58px] h-[50px]">
                                    <img src="/qu.png" className='w-full h-full object-cover' />

                                </div>
                            </div>

                            <div className="content">
                                <h4 className="text-[#1A1A1A] font-dm-sans text-xl font-normal leading-7">{blog?.comments[0]?.comment}</h4>
                                <div className="flex gap-2 items-baseline">
                                    <p className="w-[30px] h-[1px] bg-[#3661FC] "></p>
                                    <h3 className="text-[#3661FC] text-base font-normal">{blog?.comments[0]?.username}</h3>
                                </div>
                            </div>

                        </div>
                        {/* ........ */}
                        <div className="mt-10">
                            <div className="flex gap-6 justify-between flex-wrap">
                                <div className="image w-[400px] h-[309px] rounded-[20px]">
                                    <Image src={blog.image} alt='image' className='rounded-[20px]'></Image>
                                </div>
                                <div className=" max-w-[443px]">
                                    <h2 className="text-[#1A1A1A] font-nunito text-[25px] font-bold leading-[34px]">Let our investment management team</h2>
                                    <p className="mt-5 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]">Curabitur vulputatea vestibulum Phasellus rhoncus, as dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo</p>
                                    <ul className=" py-5 ">
                                        <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium">
                                            <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span> Research beyond the business plan</Link>
                                        </li>
                                        <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                                            <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span> Customer Oriented Program Daily</Link>
                                        </li>
                                        <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium ">
                                            <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span> The ability to turnaround consulting</Link>
                                        </li>
                                        <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                                            <Link className="text-[#1a1a1a] font-dm-sans text-[16px] font-normal leading-[26px] flex items-center gap-2"><span className=" w-4 h-4 text-[10px] rounded-full text-white  bg-gradient-to-r from-[#fe651b] to-[#ffaa52] flex justify-center items-center"> <FaCheck /> </span> Customer engagement matters</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-5 text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]">Posuere morbi leo urna molestie at. Ipsum dolor sit amet consectetur adipiscing elit pellentesqu habitant morbi. Odio ut
                                enim blandit volutpat maecenas volutpat. Tristique magna sit amet purus gravida. Vitae proin sagittis nisl rhoncus. Sagit
                                tis nisl rhoncus mattis rhoncus urna. Mauris vitae ultricies leo integer. Elit eget gravida cum sociis natoque Amet consec
                                tetur adipiscing elit ut aliquam purus sit amet luctus</p>
                        </div>
                        {/* ....tags / share.... */}
                        <div className="py-[22px] px-[30px] bg-[#F4F4FE] flex gap-6 mt-9 rounded-[20px] justify-between">
                            <div className="left flex gap-3 items-center">
                                <h3 className="text-[26px] font-nunito font-bold leading-[34px] text-[#1A1A1A]">Tag:</h3>
                                <div className="flex gap-[17px] items-center">
                                  
                                    <span  className="text-[#636363] hover:text-[#3661FC] transition-all duration-500 font-dm-sans text-base font-normal leading-[26px]">{blog.tags}</span>
                                </div>
                            </div>
                            <div className="right flex gap-3 items-center">
                                <h3 className="text-[26px] font-nunito font-bold leading-[34px] text-[#1A1A1A]">Share:</h3>
                                <div className=" flex gap-2 items-center ">
                                    <Link to="#" className="border border-white text-[#0064F6] shadow-[0px_4px_8px_0px_rgba(0,124,251,0.1)] bg-white rounded-full p-[11px] hover:border-[#FF7C3C] hover:text-[#FF7C3C] transition-all duration-500"><FaFacebookF /></Link>
                                    <Link to="#" className="border border-white text-[#0064F6] shadow-[0px_4px_8px_0px_rgba(0,124,251,0.1)] bg-white rounded-full p-[11px] hover:border-[#FF7C3C] hover:text-[#FF7C3C] transition-all duration-500"><FaTwitter /></Link>
                                    <Link to="#" className="border border-white text-[#0064F6] shadow-[0px_4px_8px_0px_rgba(0,124,251,0.1)] bg-white rounded-full p-[11px] hover:border-[#FF7C3C] hover:text-[#FF7C3C] transition-all duration-500"><FaInstagramSquare /></Link>
                                    <Link to="#" className="border border-white text-[#0064F6] shadow-[0px_4px_8px_0px_rgba(0,124,251,0.1)] bg-white hover:border-[#FF7C3C] hover:text-[#FF7C3C] rounded-full  p-[11px] transition-all duration-500"><FaLinkedin /></Link>

                                </div>
                            </div>
                        </div>
                        {/* ...comments..... */}
                        <div className="mt-[66px]">
                            <h2 className="text-[#252424] font-nunito text-[25px] font-bold leading-[34px]">Comments ({blog.totalComments})</h2>
                            <div>
                            {blog.comments.map((item,idx)=> <div key={idx} className="py-[30px] px-[35px] bg-[#F4F4FE] mt-9 rounded-[20px] flex gap-3 ">
                                    <div className="image w-[68px] h-[68px] rounded-full">
                                        <Image src="https://via.placeholder.com/150" className='rounded-full' alt="blog-image" />
                                    </div>
                                    <div className="content flex justify-between w-full">
                                        <div className="flex-1">
                                            <h2 className="text-[#1A1A1A] font-medium text-[20px]">{item.username}</h2>
                                            <p className="text-[#636363] font-normal text-[14px] leading-[26px]"> {item.commentedAt}</p>
                                            <p className="text-[#6B6161] font-dm-sans text-[16px] font-normal leading-[26px]">{item.comment}</p>
                                        </div>
                                        <button className=' text-white font-nunito text-[16px] font-semibold leading-[16px] tracking-normal text-center py-[11px] px-[29px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mt-10'>Reply</button>
                                    </div>

                                </div>)}
                                
                               
                            </div>
                        </div>
                        {/* .....comment..... */}
                        <div className="mt-[66px]">
                            <h2 className="text-[#1A1A1A] font-nunito text-[25px] font-bold leading-[34px]">Write Your Comment</h2>
                       <form action="" className="mt-10">

                        <div className="flex gap-4 w-full flex-wrap flex-col md:flex-row">
                            <input type="text" placeholder="Your Name" className="flex-1 px-[23px] py-[21px]  bg-[#EDEDED] text-[#9A9A9A] font-dm-sans text-[14px] font-normal leading-[14px] rounded-full" />
                            <input type="email" placeholder="Your Email" className="flex-1 px-[23px] py-[21px]  bg-[#EDEDED] text-[#9A9A9A] font-dm-sans text-[14px] font-normal leading-[14px] rounded-full " />
                            <input type="number" placeholder="phone number" className="flex-1 px-[23px] py-[21px]  bg-[#EDEDED] text-[#9A9A9A] font-dm-sans text-[14px] font-normal leading-[14px] rounded-full " />
                        </div>
                        <textarea placeholder="Your Comment" className="w-full h-[171px] px-[23px] py-[21px]  bg-[#F4F4FF] text-[#9A9A9A] font-dm-sans text-[14px] font-normal leading-[14px] rounded-[30px] mt-6" />
                        <button className=' text-white font-nunito text-[16px] font-semibold leading-[16px] tracking-normal text-center py-[15px] px-[33px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mt-10'>Send Message</button>
                       </form>
                       
                        </div>
                    </main>
                    <aside className="w-[464px]">
                        {/* <Sidebar /> */}
                        <DetailsSidebar categorey={categorey} tags={tags} blogs={blogs}/>

                    </aside>
                </div>
                <div>
                    <h2>relative Blogs </h2>
                    <div className=" flex gap-6 flex-wrap justify-center mt-[47px] w-full">
                        {relatedBlogs.slice(0, 3).map((item, idx) => <BlogCard key={idx} item={item}></BlogCard>)}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;