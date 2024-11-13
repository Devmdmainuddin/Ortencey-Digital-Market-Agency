import { TbTargetArrow } from "react-icons/tb";
import Tm from "/bgca.jpg";
import Tm1 from "/bgca.jpg";
import TeamCard from "../card/TeamCard";
import Container from "../shared/Container";

const Team = () => {
    const team = [
        {
            name: "Robert Sions",
            role: "Business Consultant",
            image: Tm
        },
        {
            name: "John",
            role: "Developer",
            image: Tm1
        },
        {
            name: "Michael",
            role: "Designer",
            image: Tm
        },
        {
            name: "David",
            role: "Product Manager",
            image: Tm1
        }
    ]
    return (
        <div className=" py-[120px] bg-[#F4F4FF]">
            <Container>

                <div className="flex gap-2 justify-center items-center">
                    <TbTargetArrow className="font-sans  text-[22px] text-red-400" />
                    <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Team Member</h3>
                </div>
                <h2 className="text-[#1a1a1a] text-center mt-4 font-nunito text-[46px] font-extrabold leading-[56px]"> Creative Team Member</h2>

               
                <div className="flex flex-wrap justify-center gap-6 mt-[47px]">
                    {team.map((item, index) => (
                        <TeamCard key={index} item={item} />
                    ))}
                </div>
            </Container>


        </div>
    );
};



export default Team;