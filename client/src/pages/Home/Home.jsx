
import About from '../../components/Home/About';

import Category from '../../components/Home/Category';
import Choose from '../../components/Home/Choose';
import Pricing from '../../components/Home/Pricing';
import Team from '../../components/Home/Team';

const Home = () => {
    return (
        <div>
           <About/>
          <Category/>
          <Choose/>
          <Pricing/>
          <Team/>
        </div>
    );
};

export default Home;