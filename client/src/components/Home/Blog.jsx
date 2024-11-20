import { TbTargetArrow } from "react-icons/tb";
import Container from "../shared/Container";
import BlogCard from "../card/BlogCard";
import useBlogs from "../../hooks/useBlogs";

const Blog = () => {
    const [blogs]=useBlogs();
  
    return (
        <div className="my-[120px]">
            <Container>
                <div>

                    <div className="flex gap-2 justify-center items-center">
                        <TbTargetArrow className="font-sans  text-[22px] text-red-400" />
                        <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Our Blog</h3>
                    </div>
                    <h2 className="text-[#1a1a1a] text-center mt-4 font-nunito text-[46px] font-extrabold leading-[56px]">Latest Blogs & Articles</h2>
                    <div className=" flex gap-6 flex-wrap justify-center mt-[47px] w-full">
                        {blogs.slice(0,3).map((item, idx) => <BlogCard key={idx} item={item}></BlogCard>)}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;