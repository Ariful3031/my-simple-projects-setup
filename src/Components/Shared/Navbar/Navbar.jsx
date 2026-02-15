import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import { button } from 'framer-motion/client';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openImageModal, setOpenImageModal] = useState(false);
    const { currentUser, logOutUser } = useContext(AuthContext)
    console.log(currentUser)
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Instructors", href: "/instructors" },
        { name: "About us", href: "/about_us" },
        { name: "Contact us", href: "/contact-us" },
        { name: "Blog", href: "/blog" },
    ];

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    const handleDashboard = () => {
        navigate('/dashboard')
    }

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);


    return (
        <>
            <nav className=' className="fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-500"'>
                <div className="px-4 sm:px-5 md:px-10 lg:px-12 xl:px-20 shadow-md">

                    <div className="relative flex justify-between items-center py-3">
                        {/* Logo */}
                        <Link to='/' className="btn btn-ghost text-xl dark:text-white">Online Learning</Link>

                        {/* Desktop Nav */}
                        <ul className="hidden sm:flex gap-6 text-white text-lg font-medium">
                            {navItems.map(({ name, href }) => (
                                <NavLink
                                    key={name}
                                    to={href}
                                    className={({ isActive }) =>
                                        `relative group transition-colors duration-300 text-sm ${isActive
                                            ? "text-primary-500"
                                            : "hover:text-primary-500 text-gray-500 dark:text-gray-300 dark:hover:text-primary-500"
                                        }`
                                    }
                                >
                                    {name}
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 dark:bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                                </NavLink>
                            ))}
                        </ul>

                        <div className="flex gap-2 items-center">
                            {/* Login and dashboard  button*/}
                            {
                                currentUser ?
                                    (<button onClick={() => setOpenImageModal(!openImageModal)}>
                                        <img className='w-12 h-12 rounded-full object-cover border' src={currentUser?.photoURL || `https://ui-avatars.com/api/?name=${currentUser.displayName}`} alt="" />
                                    </button>
                                    ) :
                                    (
                                        <Link className='btn-gradient' to={`/login`}>Login</Link>
                                    )
                            }

                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                            >
                                {isDarkMode ? (
                                    <svg
                                        className="h-8 w-8 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-8 w-8 text-gray-700 dark:text-gray-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 3v1m0 16v1m8.485-9H21m-16 0H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>


                        {/* Mobile Hamburger */}
                        <div className="sm:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-black_primary-900 dark:text-white text-3xl focus:outline-none"
                            >
                                {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                            </button>
                        </div>
                        {
                            openImageModal && (
                                <div
                                    // className="absolute top-20 right-10 duration-500 bg-white w-72 text-black transform transition-all duration-500 ease-in-out translate-y-5 opacity-100"
                                    className={`absolute top-20 right-0 bg-white text-black w-60 p-2 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${openImageModal ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
                                >
                                    <h1>{currentUser?.displayName}</h1>
                                    <p>{currentUser?.email}</p>
                                    <p className='border-b border-gray-600'></p>

                                    <button onClick={handleDashboard}>Dashboadrd</button>
                                    <br />
                                    <button onClick={() => logOutUser()}>Logout</button>

                                </div>
                            )
                        }
                    </div>


                    {/* Mobile Menu */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black_primary-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="flex flex-col p-6 pt-10 space-y-4 text-black dark:text-white text-lg font-medium">
                            {navItems.map(({ name, href }) => (
                                <NavLink
                                    key={name}
                                    to={href}
                                    className={({ isActive }) =>
                                        `relative group transition-colors duration-300 text-sm ${isActive
                                            ? "text-primary-500"
                                            : "hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                                        }`
                                    }
                                >
                                    {name}
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 dark:bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Overlay when menu is open */}
                    {isMenuOpen && (
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/30 z-30"
                        ></div>
                    )}
                </div>
            </nav >
        </>


    )
}

export default Navbar