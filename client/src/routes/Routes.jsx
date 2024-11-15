import { createBrowserRouter,} from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Main from '../layout/Main'
import Services from "../pages/Services/Services";
import News from "../pages/News/News";
import Team from "../pages/Team/Team";
import ServiceDetails from "../pages/Details/ServiceDetails";
import TeamDetails from "../pages/Details/TeamDetails";
import Portfolio from "../pages/Portfolio/Portfolio";
import PortfolioDetails from "../pages/Details/PortfolioDetails";
import Pricing from "../pages/Pricing/Pricing";
import Testimonial from "../pages/Testimonial/Testimonial";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/serviceDetails",
          element: <ServiceDetails />,
        },
        {
          path: "/teamDetails",
          element: <TeamDetails />,
        },
        {
          path: "/portfolioDetails",
          element: <PortfolioDetails />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/testimonials",
          element: <Testimonial />,
        },
        
        {
          path: "/contact",
          element: <Contact />,
        },
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
        // {
        //   path: "/register",
        //   element: <Registation />,
        // },
      ],
    },
  ]);