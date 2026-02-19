import { createBrowserRouter } from "react-router-dom";
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
import InstrocutorList from "../components/Dashboard/AdminDashboard/UsersManagement/InstrocutorList";
import StudentList from "../components/Dashboard/AdminDashboard/UsersManagement/StudentList";
import AddUser from "../components/Dashboard/AdminDashboard/UsersManagement/AddUser";
import StudentDashboard from "../components/Dashboard/StudentDashboard/StudentDashboard";
import StudentHome from "../components/Dashboard/StudentDashboard/StudentHome/StudentHome";
import MyCourses from "../components/Dashboard/StudentDashboard/MyCourses/MyCourses";
import InstructorDashboard from "../components/Dashboard/InstructorsDashboard/InstructorDashboard";
import InstructorsHome from "../components/Dashboard/InstructorsDashboard/InstructorsHome/InstructorsHome";
import AdminHome from "../components/Dashboard/AdminDashboard/AdminHome/AdminHome";
import Profile from "../components/pages/ProfilePage/Profile";
import InstructorsDetails from "../components/pages/Home/Instructors/InstructorsDetails";
import UpdateCourse from "../components/Dashboard/AdminDashboard/CoursesManagement/UpdateCourse";
import CoursesList from "../components/Dashboard/AdminDashboard/CoursesManagement/CoursesList";
import CreateCourse from "../components/Dashboard/AdminDashboard/CoursesManagement/CreateCourse";
import CourseDetails from "../Components/pages/CoursesPage/CourseDetails";






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
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>
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
      // {
      //   path: "/profile",
      //   element: <Profile></Profile>
      // },
      {
        path: "instructor/details/:id",
        element: <InstructorsDetails></InstructorsDetails>
      },

    ]
  },
  {
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        index: true,
        element: <AdminHome></AdminHome>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },

      // user management section 
      {
        path: 'instructor-list',
        element: <InstrocutorList></InstrocutorList>
      },
      {
        path: 'student-list',
        element: <StudentList></StudentList>
      },
      {
        path: 'add-user',
        element: <AddUser></AddUser>
      },
      // courses management section 
      {
        path: 'create-course',
        element: <CreateCourse></CreateCourse>
      },
      {
        path: 'update-course',
        element: <UpdateCourse></UpdateCourse>
      },
      {
        path: 'course-list',
        element: <CoursesList></CoursesList>
      },
    ]
  },

  {
    path: "instructors-dashboard",
    element: <InstructorDashboard></InstructorDashboard>,
    children: [
      {
        index: true,
        element: <InstructorsHome></InstructorsHome>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      // courses management section 
      {
        path: 'create-course',
        element: <CreateCourse></CreateCourse>
      },
      {
        path: 'update-course',
        element: <UpdateCourse></UpdateCourse>
      },
      {
        path: 'course-list',
        element: <CoursesList></CoursesList>
      },
    ]
  },
  {
    path: "students-dashboard",
    element: <StudentDashboard></StudentDashboard>,
    children: [
      {
        index: true,
        element: <StudentHome></StudentHome>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: 'my-course',
        element: <MyCourses></MyCourses>
      },

    ]
  },
]);