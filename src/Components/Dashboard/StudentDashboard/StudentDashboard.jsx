import { FaBlog, FaBook, FaGraduationCap, FaLock, FaSignOutAlt, FaTags, FaTicketAlt, FaUserCircle } from "react-icons/fa";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { FaUsersGear } from "react-icons/fa6";
import { HiSun, HiMoon } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { FiChevronDown, FiChevronsLeft, FiChevronUp, FiHome, FiMenu, FiSearch } from "react-icons/fi";
import useDatabaseCurrentUser from "../../hooks/useDatabaseCurrentUser";
// import { IoSettings } from "react-icons/io5";

// import Swal from "sweetalert2";
// import { toast } from "react-toastify";
// import { MdAssignmentAdd, MdContacts, MdEditNote, MdGroups, MdOutlineReviews, MdViewModule, } from "react-icons/md";
// import { Briefcase } from "lucide-react";





const DropdownItem = ({ icon, label, sidebarOpen, subLinks = [] }) => {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        if (sidebarOpen) setOpen(!open);
    };

    return (
        <div className="relative group w-full">
            <div
                onClick={toggleDropdown}
                className="flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-md transition-all duration-300"
            >
                <div className="flex items-center gap-3">
                    <span className="text-xl">{icon}</span>
                    {sidebarOpen && (
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                            {label}
                        </span>
                    )}
                </div>
                {sidebarOpen && (
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                )}
            </div>

            {!sidebarOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-full top-2 ml-2 z-50 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 border border-gray-200 dark:border-gray-700 hidden group-hover:block"
                >
                    <div className="text-sm font-semibold mb-1 text-gray-800 dark:text-white">
                        {label}
                    </div>
                    <ul className="flex flex-col gap-1">
                        {subLinks?.map((link, index) => (
                            <Link
                                key={index}
                                to={link?.to}
                                state={link?.state}
                                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition"
                            >
                                {link?.label}
                                {link?.count !== undefined && (
                                    <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 px-2 py-0.5 rounded-full">
                                        {link?.count}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </ul>
                </motion.div>
            )}

            <AnimatePresence>
                {sidebarOpen && open && (
                    <motion.div
                        className="pl-10 flex flex-col gap-2 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {subLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                className="text-xs text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
                            >
                                {link.label}
                                {link.count !== undefined && (
                                    <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 px-2 py-0.5 rounded-full">
                                        {link.count}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const StudentDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { logOutUser, currentUser } = useContext(AuthContext)

    const [open, setOpen] = useState(false);
    const { currentDatabaseUser, isLoading } = useDatabaseCurrentUser()
    // console.log(currentDatabaseUser)
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark",
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    // const profileImage =
    //     user?.photo ||
    //     user?.image ||
    //     `https://ui-avatars.com/api/?name=${user.name}`;


    return (
        <div className={`font-montserrat`}>
            <div className="flex h-screen bg-gray-50 dark:bg-[#00091a] text-gray-900 dark:text-gray-100 relative">
                {/* Sidebar */}
                <aside
                    className={`transition-all duration-700 bg-white dark:bg-gray-900 shadow-xl h-screen ${sidebarOpen ? "w-60" : "w-20"
                        } fixed md:static top-0 left-0 z-50 overflow-y-auto scrollbar-hide ${sidebarOpen ? "block" : "hidden md:block"
                        }`}
                >
                    <div className="flex items-center justify-between p-4">
                        {sidebarOpen && (
                            <Link to="/">
                                <div className="">Online Learing</div>
                            </Link>
                        )}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="text-gray-600 dark:text-gray-300 text-2xl"
                        >
                            <FiChevronsLeft />
                        </button>
                    </div>

                    <nav className="mt-4">
                        <ul className="space-y-1 text-sm">
                            <li className="relative group">
                                <NavLink
                                    to="/students-dashboard"
                                    className={({
                                        isActive,
                                    }) => `group relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${isActive
                                        ? " text-primary-500 shadow-md font-semibold"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                >
                                    <span className="text-base">
                                        <FiHome />
                                    </span>
                                    {sidebarOpen && (
                                        <span className="whitespace-nowrap">Dashboard</span>
                                    )}
                                </NavLink>
                                <NavLink
                                    to="/students-dashboard/my-course"
                                    className={({
                                        isActive,
                                    }) => `group relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${isActive
                                        ? " text-primary-500  font-semibold"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                >
                                    <span className="text-base">
                                        <FiHome />
                                    </span>
                                    {sidebarOpen && (
                                        <span className="">My course</span>
                                    )}
                                </NavLink>
                            </li>


                            {/* {sidebarOpen && (
                                <li className="text-xs text-gray-400 dark:text-gray-500 py-4 px-3 tracking-wide uppercase">
                                    My Course
                                </li>
                            )}

                            <DropdownItem
                                icon={<FaUsersGear />}
                                label="Manage Users"
                                sidebarOpen={sidebarOpen}
                                subLinks={[
                                    { label: "Student List", to: "student-list" },
                                    { label: "Instructor List", to: "instructor-list" },
                                    { label: "Add User", to: "add-user" },

                                ]}
                            /> */}

                        </ul>
                    </nav>
                </aside>


                {/* small device er  open side bar icon  */}
                {!sidebarOpen && (
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="md:hidden absolute top-4 left-4 text-2xl z-50 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 p-2 rounded-full shadow"
                    >
                        <FiMenu />
                    </button>
                )}

                <div className="flex-1 flex flex-col overflow-hidden ml-0 md:ml-0">
                    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
                        <div className="relative w-64">
                            <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-4 md:gap-6">
                            <button
                                onClick={toggleTheme}
                                className="text-xl text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition"
                                title="Toggle Theme"
                            >
                                {darkMode ? <HiSun /> : <HiMoon />}
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="flex items-center gap-3 group"
                                >

                                    <div className="relative w-10 h-10 rounded-full flex justify-center items-center overflow-hidden border-4 border-purple-500 shadow-lg">
                                        {/* <img
                                            src={currentDatabaseUser?.image}
                                            alt="Name"
                                            className="w-full h-full object-cover"
                                        /> */}
                                        <img className='w-12 h-12  rounded-full object-cover border' src={currentDatabaseUser?.photoURL || `https://ui-avatars.com/api/?name=${currentDatabaseUser?.displayName}`} alt="" />

                                    </div>
                                    <div className="max-sm:flex-col md:block text-left">
                                        <p className="font-semibold text-sm text-gray-800 dark:text-white">
                                            {currentDatabaseUser?.displayName}
                                        </p>
                                        <p className="text-xs text-gray-500 text-center dark:text-gray-400">
                                            {currentDatabaseUser?.role}
                                        </p>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {open && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-3 w-52 bg-white/95 dark:bg-[#00132f]/95 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl z-50 backdrop-blur-md overflow-hidden"
                                        >
                                            <Link
                                                to="profile"
                                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-primary-500/10 transition"
                                            >
                                                <FaUserCircle className="text-lg text-primary-500" />{" "}
                                                Profile
                                            </Link>

                                            <hr className="border-t dark:border-gray-700" />
                                            <button
                                                onClick={logOutUser}
                                                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition"
                                            >
                                                <FaSignOutAlt className="text-lg" /> Logout
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard