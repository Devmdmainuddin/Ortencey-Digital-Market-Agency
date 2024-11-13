
import About from '../../components/Home/About';
import Blog from '../../components/Home/Blog';

import Category from '../../components/Home/Category';
import Choose from '../../components/Home/Choose';
import Contact from '../../components/Home/Contact';
import Hero from '../../components/Home/Hero';
import Pricing from '../../components/Home/Pricing';
import Team from '../../components/Home/Team';

const Home = () => {
    return (
        <div>
            <Hero/>
           <About/>
          <Category/>
          <Choose/>
          <Pricing/>
          <Contact/>
          <Team/>
          <Blog/>
          
        </div>
    );
};

export default Home;