
import Work from "./card/Work";
import Container from "./shared/Container";

const WorkProsses = () => {
    const service = [
        {
            id: 1,
            name: 'Web Design',
            icon: '/Group.png',
            image: '/ac.png',
            description: 'Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical literature.',
        },
        {
            id: 2,
            name: 'Graphics Design',
            icon: '/Group.png',
            image: '/ca2.png',
            description: 'Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical literature.',
        },
        {
            id: 3,
            name: 'Digital Marketing',
            icon: '/Group.png',
            image: '/ca3.png',
            description: 'Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical literature.',
        }
    ]
    return (
        <div className="bg-[#F7F7FF] py-[120px]">
        <Container>

            <div className="flex justify-center items-center flex-col">
                <div className="flex gap-2 items-center">
                    <img src="/icon1.png" alt="" />
                    <h3 className="text-[#3661fc] font-dm-sans text-[20px] font-medium leading-[26px]">Work Prosses</h3>
                </div>
                <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-extrabold leading-[56px]">How We Work!</h2>
            </div>


            <div className=" flex gap-6 flex-wrap justify-center mt-[46px]">
                {service.map((item, idx) => <Work key={idx} item={item}></Work>)}
            </div>
        </Container>
    </div>
    );
};

export default WorkProsses;