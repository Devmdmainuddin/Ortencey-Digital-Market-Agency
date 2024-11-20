import { TbTargetArrow } from "react-icons/tb";
import TeamCard from "../card/TeamCard";
import Container from "../shared/Container";
import useTeams from '../../hooks/useTeams'
const Team = () => {
    const [team]=useTeams()
    return (
        <div className=" py-[120px] bg-[#F4F4FF]">
            <Container>

                <div className="flex gap-2 justify-center items-center">
                    <TbTargetArrow className="font-sans  text-[22px] text-red-400" />
                    <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Team Member</h3>
                </div>
                <h2 className="text-[#1a1a1a] text-center mt-4 font-nunito text-[46px] font-extrabold leading-[56px]"> Creative Team Member</h2>

               
                <div className="flex flex-wrap justify-center gap-6 mt-[47px]">
                    {team.slice(0,4).map((item, index) => (
                        <TeamCard key={index} item={item} />
                    ))}
                </div>
            </Container>


        </div>
    );
};



export default Team;