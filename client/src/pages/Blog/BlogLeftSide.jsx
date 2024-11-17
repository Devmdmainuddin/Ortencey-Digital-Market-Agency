import Sidebar from "../../components/blog/Sidebar";
import BlogCard from "../../components/card/BlogCard";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";

const BlogLeftSide = () => {
    const blogs = [
        {
            image: "/bgca.jpg",
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
            image: "/bgca.jpg",
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
            image: "/bgca.jpg",
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
        {
            image: "/bgca.jpg",
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
            image: "/bgca.jpg",
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
            image: "/bgca.jpg",
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
        {
            image: "/bgca.jpg",
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
            image: "/bgca.jpg",
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
            image: "/bgca.jpg",
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
        <div>
            <Bredcumb />
            <Container>
            <div className="flex gap-6 justify-between flex-wrap my-[120px]">
            <aside className="w-[464px]">
                        <Sidebar/>

                    </aside>
                    <main className="flex-1">
                    <div className=" flex gap-6 flex-wrap justify-center mt-[47px] w-full">
                        {blogs.map((item, idx) => <BlogCard key={idx} item={item}></BlogCard>)}
                    </div>
                    </main>
                    
                </div>
            </Container>
        </div>
    );
};

export default BlogLeftSide;