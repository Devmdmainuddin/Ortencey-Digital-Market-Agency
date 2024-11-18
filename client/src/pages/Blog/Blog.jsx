import Sidebar from "../../components/blog/Sidebar";
import BlogCard1 from "../../components/card/BlogCard1";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";


const Blog = () => {
    const blogs = [
        {
            image: "/bgca.jpg",
            title: "Successful business partner have a meeting and discussing",
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            description: "There are many variations of passages of Lorem Ipsum available, but as the majoritsy have suffered alteration in some form, by injected humour, or randomised words which don't look evens slightly believable.",
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
            <Bredcumb/>
         <Container>
         <div className="flex gap-6 justify-between flex-wrap my-[120px]">
                    <main className="flex-1">
                    <div className=" flex gap-6 flex-wrap justify-center mt-[47px] w-full">
                        {blogs.map((item, idx) => <BlogCard1 key={idx} item={item}></BlogCard1>)}
                    </div>
                    </main>
                    <aside className="w-[464px]">
                        <Sidebar/>

                    </aside>
                </div>
         </Container>
        </div>
    );
};

export default Blog;