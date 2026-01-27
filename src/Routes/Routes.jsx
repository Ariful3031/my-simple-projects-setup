import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/Register/Register";
import Courses from "../components/pages/Courses/Courses";
import AboutUs from "../components/pages/About/AboutUs";
import ContactUs from "../components/pages/Contact/ContactUs";
import Instructors from "../components/pages/Instructors/Instructors";
import Blog from "../components/pages/Blog/Blog";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/courses",
        element: <Courses></Courses>
      },
      {
        path: "/about_us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ]
  },
]);