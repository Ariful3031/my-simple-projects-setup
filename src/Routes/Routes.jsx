import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/Register/Register";
import BlogPage from "../components/pages/BlogPage/BlogPage";
import InstructorsPage from "../components/pages/InstructorsPage/InstructorsPage";
import ContactUsPage from "../components/pages/ContactPage/ContactUsPage";
import AboutUsPage from "../components/pages/AboutUsPage/AboutUsPage";
import CoursesPage from "../components/pages/CoursesPage/CoursesPage";
import AdminDashboard from "../components/Dashboard/AdminDashboard/AdminDashboard";




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
        element: <CoursesPage></CoursesPage>
      },
      {
        path: "/about_us",
        element: <AboutUsPage></AboutUsPage>
      },
      {
        path: "/contact-us",
        element: <ContactUsPage></ContactUsPage>
      },
      {
        path: "/instructors",
        element: <InstructorsPage></InstructorsPage>
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>
      },
    ]
  },
  {
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      // {
      //   index: true,
      //   element:
      // },
    ]
  }
]);