import ServiceCard from "./card/ServiceCard";
import Container from "./shared/Container";



const Service = () => {
    const service = [
        {
            id: 1,
            name: 'Search Engine Optimization',
            icon: '/Group.png',
            image: '/bgca.jpg',
            description: 'There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don{`,`}t worry a look even sligh believable. If you are going to use a passage.',
        },
        {
            id: 2,
            name: 'Web Design & Development',
            icon: '/Group.png',
            image: '/bgca.jpg',
            description: 'There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don{`,`}t worry a look even sligh believable. If you are going to use a passage.',
        },
        {
            id: 3,
            name: 'Social Media Network Marketing ',
            icon: '/Group.png',
            image: '/bgca.jpg',
            description: 'There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don{`,`}t worry a look even sligh believable. If you are going to use a passage.',
        }
    ]
    return (
        <div className="my-[120px]">
            <Container>
                <div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="flex gap-2 items-center">
                            <img src="/icon1.png" alt="" />
                            <h3 className="text-[#FE651B] font-dm-sans text-[20px] font-medium leading-[26px]">Our Services</h3>
                        </div>
                        <h2 className="text-[#1a1a1a] mt-4 font-nunito text-[46px] font-extrabold leading-[56px]">Best Quality Services</h2>
                    </div>

                    <div className=" mt-[46px] flex flex-col gap-6">
                        {service.map((item, idx) => <ServiceCard key={idx} item={item}></ServiceCard>)}
                    </div>
                </div>
            </Container>

        </div>


    );
};

export default Service;