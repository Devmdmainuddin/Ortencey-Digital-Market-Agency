import { createBrowserRouter,} from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Main from '../layout/Main'
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
        // {
        //   path: "/blog",
        //   element: <Blog />,
        // },
     
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