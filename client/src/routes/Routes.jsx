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
import Blog from "../pages/Blog/Blog";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import BlogLeftSide from "../pages/Blog/BlogLeftSide";
import BlogRightSide from "../pages/Blog/BlogRightSide";
import ShopDetails from "../pages/Details/ShopDetails";
import BlogDetails from "../pages/Details/BlogDetails";
import Faq from "../pages/Faq/Faq";
import Shop from "../pages/Shop/Shop";
import AddProductCard from "../pages/Dashboard/AddProductCard";
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
          path: "/addProductCard",
          element: <AddProductCard />,
        },
        // {
        //   path: "/shopsDetails",
        //   element: <ShopDetails />,
        // },
        {
          path: "/product/:id",
          element: <ShopDetails />,
          loader: () =>fetch('/FakeData.json')
        },
        {
          path: "/blogsDetails",
          element: <BlogDetails />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/faq",
          element: <Faq />,
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
        {
          path: "/blogs",
          element: <Blog />,
        },
        {
          path: "/blogsRightSide",
          element: <BlogRightSide />,
        },
        {
          path: "/blogsLeftSide",
          element: <BlogLeftSide />,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/yourcart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <CheckOut />,
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