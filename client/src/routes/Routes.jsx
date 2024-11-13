import { createBrowserRouter,} from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Main from '../layout/Main'
import Services from "../pages/Services/Services";
import News from "../pages/News/News";
import Team from "../pages/Team/Team";
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
          path: "/team",
          element: <Team />,
        },
        {
          path: "/news",
          element: <News />,
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