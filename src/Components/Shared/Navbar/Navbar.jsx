import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }
    const Links =<>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            {/* <li><NavLink to='/'></NavLink></li>
            <li><NavLink to='/'></NavLink></li>
            <li><NavLink to='/'></NavLink></li> */}
        </>


    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul>
                        {
                            Links
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul>
                   {
                    Links
                   }
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <div>
                    <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" className="toggle theme-controller" />
                </div>
                <Link to='/login' className="btn btn-gradient">Login</Link>
            </div>
        </div>
    )
}

export default Navbar