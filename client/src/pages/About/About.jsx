import Category from '../../components/Home/Category';
import Bredcumb from '../../components/shared/Bredcumb'
import Abouts from '../../components/Home/About';
import Choose from '../../components/Home/Choose';
import Team from '../../components/Home/Team';
import Success from '../../components/about/Success';
import Count from '../../components/about/Count';
const About = () => {
    return (
        <div>
           <Bredcumb/>
           <Category/>
           <Abouts/>
           <Choose/>
           <Success/>
           <Team/>
           <Count/>
        </div>
    );
};

export default About;