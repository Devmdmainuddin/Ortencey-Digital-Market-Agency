import React from 'react';
import CategoryCard from '../card/CategoryCard';
import Container from '../shared/Container';

const Category = () => {
    const category=[
        {
            id:1,
            name: 'Graphics Design',
            icon:'/Group.png',
            image: '/ga.jpg',
            description: 'Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.',
        },
        {
            id:2,
            name: 'Web Development',
            icon:'/Vector.png',
            image: '/ap.jpg',
            description: 'Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.',
        },
        {
            id:3,
            name: 'app Design',
            icon:'/m.png',
            image: '/ap.jpg',
            description: 'Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.',
        },
        {
            id:4,
            name: 'Digital Marketing',
            icon:'/u.png',
            image: '/dg.avif',
            description: 'Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.',
        }
    ]
    return (
        <div>
            <Container>
                <div className='my-[84px] flex flex-wrap gap-6'>
                    {category.map((item,idx)=> <CategoryCard key={idx} item={item}></CategoryCard>)}
                   

                </div>
            </Container>
        </div>
    );
};

export default Category;