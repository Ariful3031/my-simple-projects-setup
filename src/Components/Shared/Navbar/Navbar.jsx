import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
    // const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    // useEffect(() => {
    //     const html = document.querySelector('html')
    //     html.setAttribute("data-theme", theme)
    //     localStorage.setItem("theme", theme)
    // }, [theme])

    // // const handleTheme = (checked) => {
    //     setTheme(checked ? "dark" : "light")
    // }
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Instructors", href: "/instructors" },
        { name: "About us", href: "/about_us" },
        { name: "Contact us", href: "/contact-us" },
        { name: "Blog", href: "/blog" },
    ];


    return (
        <>
            <nav className=' className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#00091a] shadow-md transition-colors duration-500"'>
                <div className="flex items-center justify-between">
                    {/* logo  */}
                    <div className="">
                        <Link to='/' className="btn btn-ghost text-xl">Online Learning</Link>
                    </div>

                    {/* desktop nav  */}
                    <div className="hidden lg:flex gap-5 items-center text-semibold">
                        {navItems.map(({ name, href }) => (
                            <NavLink
                                key={name}
                                to={href}
                                className={({ isActive }) =>
                                    `relative group transition-colors duration-300 text-sm ${isActive
                                        ? "text-primary-500"
                                        : "hover:text-primary-500 dark:hover:text-primary-500"
                                    }`
                                }
                            >
                                {name}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 dark:bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                            </NavLink>
                        ))}

                    </div>

                    {/* mobile nav  */}
                    <div className="flex lg:hidden items-center space-x-4 p-3">

                    </div>

                </div>

            </nav >
        </>
        // <nav className="navbar md:px-12 bg-base-100 shadow-sm">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        //             </div>
        //             <div
        //                 tabIndex="-1"
        //                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow">
        //                 {navItems.map(({ name, href }) => (
        //                     <NavLink
        //                         key={name}
        //                         to={href}
        //                         className={({ isActive }) =>
        //                             `relative group transition-colors duration-300 text-sm ${isActive
        //                                 ? "text-primary-500"
        //                                 : "hover:text-primary-500 dark:hover:text-primary-500"
        //                             }`
        //                         }
        //                     >
        //                         {name}
        //                         <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 dark:bg-primary-500 group-hover:w-full transition-all duration-300"></span>
        //                     </NavLink>
        //                 ))}
        //             </div>
        //         </div>
        //         <Link to='/' className="btn btn-ghost text-xl">Online Learning</Link>
        //     </div>
        //     <div className="navbar-center hidden md:flex gap-2">
        //         {navItems.map(({ name, href }) => (
        //             <NavLink
        //                 key={name}
        //                 to={href}
        //                 className={({ isActive }) =>
        //                     `relative group transition-colors duration-300 text-sm ${isActive
        //                         ? "text-primary-500"
        //                         : "hover:text-primary-500 dark:hover:text-primary-500"
        //                     }`
        //                 }
        //             >
        //                 {name}
        //                 <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 dark:bg-primary-500 group-hover:w-full duration-300  "></span>
        //             </NavLink>
        //         ))}

        //     </div>
        //     <div className="navbar-end">
        //         <Link to='/login' className="btn btn-gradient">Login</Link>
        //     </div>
        // </nav>


    )
}

export default Navbar