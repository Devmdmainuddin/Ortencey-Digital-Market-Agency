import { TbTargetArrow } from "react-icons/tb";
import Container from "../shared/Container";
import BlogCard from "../card/BlogCard";

const Blog = () => {
    const blogs = [
        {
            image: "/b.jpg",
            title: "Successful business partner have a meeting and discussing",
            description: "",
            category: "Digital Agency",
            author: "admin",
            date: "",
            tags: [],
            totalComments: 25,
            comments: [],
            readTime: "",
            views: 120,
           createAt: "2024-11-12T10:15:30.000Z",
        },
        {
            image: "/ba.jpg",
            title: "Motivated colleagues celebrating corporate success together",
            description: "",
            category: "Digital Agency",
            author: "admin",
            date: "",
            tags: [],
            totalComments: 25,
            comments: [],
            readTime: "",
            views: 120,
            createAt: "2024-11-18T10:15:30.000Z",
        },
        {
            image: "/bab.jpg",
            title: "Man using a tablet to a work and connect with others",
            description: "",
            category: "Digital Agency",
            author: "admin",
            date: "",
            tags: [],
            totalComments: 25,
            comments: [],
            readTime: "",
            views: 120,
            createAt: "2024-11-13T10:15:30.000Z",
        },
       

    ]
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
                        {blogs.map((item, idx) => <BlogCard key={idx} item={item}></BlogCard>)}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;