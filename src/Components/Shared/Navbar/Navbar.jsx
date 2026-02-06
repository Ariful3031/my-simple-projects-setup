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
    // const Links = <>
    //     <li><NavLink to='/'>Home</NavLink></li>
    //     <li><NavLink to='/courses'>Courses</NavLink></li>
    //     <li><NavLink to='#'>others</NavLink></li>
    //     <li><NavLink to='#'>others -2</NavLink></li>
    // </>
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },


    ];


    return (
        <nav className="navbar md:px-12 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <div
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow">
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
                </div>
                <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden md:flex gap-2">
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
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 dark:bg-primary-500 group-hover:w-full duration-300  "></span>
                    </NavLink>
                ))}

            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn btn-gradient">Login</Link>
            </div>
        </nav>


    )
}

export default Navbar