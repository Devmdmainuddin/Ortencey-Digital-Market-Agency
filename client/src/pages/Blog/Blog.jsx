import { useEffect, useState } from "react";
import Sidebar from "../../components/blog/Sidebar";
import BlogCard1 from "../../components/card/BlogCard1";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import useBlogs from "../../hooks/useBlogs";
// import { useLocation } from "react-router-dom";


const Blog = () => {
    const [blogs] = useBlogs();
    const [item, setItem] = useState([])
    const [categorey, setCategorey] = useState([])
    const [tags, setTags] = useState([])
    let [searchInput, setSearchInput] = useState("");
   
    // const location = useLocation();

    // useEffect(() => {
    //     const getCategoryFromQuery = () => {
    //         const params = new URLSearchParams(location.search);
    //         return params.get('blogscategory');
    //     };
    //     const category = getCategoryFromQuery();

    //     if (blogs) {
    //         if (category) {
    //             const filtered = blogs?.filter((product) => product.category === category);

    //             setItem(filtered);
    //         } else {
    //             setItem(blogs);
    //         }
    //     }
    // }, [blogs, location]);


    const handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            setItem([])
        } else {
            const searchOne = blogs?.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setItem(searchOne)
        }
    }



    useEffect(() => {
        if (blogs) {
            setCategorey([... new Set(blogs?.map(item => item.category))])
            setTags([... new Set(blogs?.map(item => item.tags))])
            setItem(blogs)
        }
    }, [blogs])
    const handleCategoryfilter = filter => {
        const filterItem = blogs?.filter(item => item.category === filter);
        setItem(filterItem);
    }
    const handleTags = filter => {
        const filterItem = blogs?.filter(item => item.tags === filter);
        setItem(filterItem);
    }

    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="flex gap-6 justify-between flex-wrap my-[120px]">
                    <main className="flex-1">
                        <div className=" flex gap-6 flex-wrap justify-center mt-[47px] w-full">
                            {item.map((item, idx) => <BlogCard1 key={idx} item={item}></BlogCard1>)}
                        </div>
                    </main>
                    <aside className="w-[464px]">
                        <Sidebar handleInput={handleInput} handleCategoryfilter={handleCategoryfilter} categorey={categorey} searchInput={searchInput} handleTags={handleTags} tags={tags} />


                    </aside>
                </div>
            </Container>
        </div>
    );
};

export default Blog;