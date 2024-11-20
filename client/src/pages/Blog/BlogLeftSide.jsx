import { useEffect, useState } from "react";
import Sidebar from "../../components/blog/Sidebar";
import BlogCard from "../../components/card/BlogCard";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import useBlogs from "../../hooks/useBlogs";

const BlogLeftSide = () => {
    const [blogs]=useBlogs();
    const [item, setItem] = useState([])
    const [categorey, setCategorey] = useState([])
    const [brand, setBrand] = useState([])
    let [searchInput, setSearchInput] = useState("");
    // let [searchFilter, setSearchFilter] = useState([]);




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
            setBrand([... new Set(blogs?.map(item => item.brand))])
            setItem(blogs)
        }
    }, [blogs])

    
    return (
        <div>
            <Bredcumb />
            <Container>
                <div className="flex gap-6 justify-between flex-wrap my-[120px]">
                    <aside className="w-[464px]">
                        <Sidebar handleInput={handleInput} searchInput={searchInput}/>

                    </aside>
                    <main className="flex-1">
                        <div className=" flex gap-6 flex-wrap justify-center mt-[47px] w-full">
                            {item.map((item, idx) => <BlogCard key={idx} item={item}></BlogCard>)}
                        </div>
                    </main>

                </div>
            </Container>
        </div>
    );
};

export default BlogLeftSide;