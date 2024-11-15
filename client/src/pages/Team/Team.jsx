import React from 'react';
import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container';
import TeamCard1 from '../../components/card/TeamCard1';

const Team = () => {
    const team = [
        {
            name: "Robert Sions",
            role: "Business Consultant",
            image: "/bgca.jpg"
        },
        {
            name: "John",
            role: "Developer",
            image: "/bgca.jpg"
        },
        {
            name: "Michael",
            role: "Designer",
            image: "/bgca.jpg"
        },
        {
            name: "Robert Sions",
            role: "Business Consultant",
            image: "/bgca.jpg"
        },
        {
            name: "John",
            role: "Developer",
            image: "/bgca.jpg"
        },
        {
            name: "David",
            role: "Product Manager",
            image: "/bgca.jpg"
        },
        {
            name: "Robert Sions",
            role: "Business Consultant",
            image: "/bgca.jpg"
        },
        {
            name: "John",
            role: "Developer",
            image: "/bgca.jpg"
        },
        {
            name: "David",
            role: "Product Manager",
            image: "/bgca.jpg"
        },
        {
            name: "Robert Sions",
            role: "Business Consultant",
            image: "/bgca.jpg"
        },
        {
            name: "John",
            role: "Developer",
            image: "/bgca.jpg"
        },
     
      
    ]
    return (
        <div>
            <Bredcumb />
            <Container>
                <div className='my-[120px]'>
                    <div className="flex gap-2 items-center justify-center">
                        <img src="/icon1.png" alt="" />
                        <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Team Member</h3>
                    </div>
                    <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-extrabold leading-[56px] text-center">Creative Team Member </h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-[47px]">
                    {team.map((item, index) => (
                        <TeamCard1 key={index} item={item} />
                    ))}
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Team;