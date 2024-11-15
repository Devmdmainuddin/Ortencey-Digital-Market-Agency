import { TbTargetArrow } from "react-icons/tb";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import PortfolioCard from "../../components/card/PortfolioCard";


const Portfolio = () => {
    const portfolio=[
        {
            image: "/bgca.jpg",
            title: "Business Consultant",
            description: "",
            category: "Digital Agency",
            author: "admin"
        },
        {
            image: "/bgca.jpg",
            title: "Developer",
            description: "",
            category: "Digital Agency",
            author: "admin"
        },
        {
            image: "/bgca.jpg",
            title: "Product Manager",
            description: "",
            category: "Digital Agency",
            author: "admin"
        },
        {
            image: "/bgca.jpg",
            title: "Designer",
            description: "",
            category: "Digital Agency",
            author: "admin"
        },
        {
            image: "/bgca.jpg",
            title: "Business Consultant",
            description: "",
            category: "Digital Agency",
            author: "admin"
        },
        {
            image: "/bgca.jpg",
            title: "Developer",
            description: "",
            category: "Digital Agency",
            author: "admin"
        }
    ]
    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                <div className="my-[120px]">
                    <div className="flex gap-2 justify-center items-center">
                        <TbTargetArrow className="font-sans  text-[22px] text-red-400" />
                        <h3 className="text-red-400 font-dm-sans text-[20px] font-medium leading-[26px]">Our Portfolio</h3>
                    </div>
                    <h2 className="text-[#1a1a1a] text-center mt-4 font-nunito text-[46px] font-extrabold leading-[56px]"> Our Impressive Portfolio</h2>
                    <div className=" mt-[46px] flex flex-wrap  justify-center gap-6">
                        {portfolio.map((item, idx) => <PortfolioCard key={idx} item={item}></PortfolioCard>)}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;