import { useEffect, useState } from "react";
import Sidebar from "../../components/blog/Sidebar";
import BlogCard1 from "../../components/card/BlogCard1";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import useBlogs from "../../hooks/useBlogs";


const Blog = () => {
    const [blogs]=useBlogs();
    const [item, setItem] = useState([])
    const [categorey, setCategorey] = useState([])
    const [brand, setBrand] = useState([])
    let [searchInput, setSearchInput] = useState("");
    // let [searchFilter, setSearchFilter] = useState([]);





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
            setBrand([... new Set(blogs?.map(item => item.brand))])
            setItem(blogs)
        }
    }, [blogs])
    // const handleCategoryfilter = filter => {
    //     const filterItem = blogs?.filter(item => item.category === filter);
    //     setItem(filterItem);
    // }
    // const handleBrandfilter = filter => {
    //     const filterItem = blogs?.filter(item => item.brand === filter);
    //     setItem(filterItem);
    // }

    return (
        <div>
            <Bredcumb/>
         <Container>
         <div className="flex gap-6 justify-between flex-wrap my-[120px]">
                    <main className="flex-1">
                    <div className=" flex gap-6 flex-wrap justify-center mt-[47px] w-full">
                        {item.map((item, idx) => <BlogCard1 key={idx} item={item}></BlogCard1>)}
                    </div>
                    </main>
                    <aside className="w-[464px]">
                        <Sidebar handleInput={handleInput} searchInput={searchInput}/>
                   

                    </aside>
                </div>
         </Container>
        </div>
    );
};

export default Blog;