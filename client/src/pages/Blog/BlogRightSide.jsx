import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import BlogCard from "../../components/card/BlogCard";
import Sidebar from "../../components/blog/Sidebar";
import useBlogs from "../../hooks/useBlogs";
import { useEffect, useState } from "react";


const BlogRightSide = () => {
    const [blogs]=useBlogs();
    const [item, setItem] = useState([])
    const [categorey, setCategorey] = useState([])
    const [tags, setTags] = useState([])
    let [searchInput, setSearchInput] = useState("");


    const handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value != "") {
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
                        {item.map((item, idx) => <BlogCard key={idx} item={item}></BlogCard>)}
                    </div>
                    </main>
                    <aside className="w-[464px]">
                        <Sidebar handleInput={handleInput} handleTags={handleTags} searchInput={searchInput} categorey={categorey} handleCategoryfilter={handleCategoryfilter} tags={tags}/>

                    </aside>
                </div>
            </Container>
        </div>
    );
};

export default BlogRightSide;