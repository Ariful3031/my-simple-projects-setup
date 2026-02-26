import { useState } from "react";
import { FaEdit, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAllUsersAdminQuery } from "../../../../redux/api/authApi";
import Loading from "../../../pages/Loading/Loading";


const StudentList = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("latest");
  const { data, isLoading } = useGetAllUsersAdminQuery({ role: 'student', searchText: searchTerm, sort: orderBy });


  if (isLoading) {
    return <Loading></Loading>
  }


  return (
    <>
      <div className=" bg-gray-100 dark:bg-gray-900 p-4 md:p-8 text-gray-800 dark:text-white">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-xl rounded-md">
          {/* Header */}

          <div className="shadow p-4 rounded-lg mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h2 className="text-xl font-semibold text-primary-500">
              Student List
            </h2>
            <Link
              to={"/dashboard"}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              <span className="font-bold">Dashboard</span> / Student List
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            {/* Filter Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {/* Search */}
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              />

              {/* Order By */}
              <select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>

            {/* Export Button */}
            <button
              className="w-full lg:w-auto px-3 whitespace-nowrap py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-md transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              Export Users CSV
            </button>
          </div>

          {/* User Table */}
          <div className="overflow-auto h-[calc(100vh-400px)] custom-scrollbar">
            <table className="min-w-full table-auto bg-transparent">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gray-100 dark:bg-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-white">
                  <th className="py-3 px-4">SN</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Phone Number</th>
                  <th className="py-3 px-4">Joined At</th>
                  <th className="py-3 px-4">Student ID</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data?.map((user, idx) => (
                  <tr
                    key={user?._id || user?.id}
                    className="bg-white dark:bg-gray-800 hover:shadow-md transition-all rounded-md"
                  >
                    <td className="py-3 px-4">{idx + 1}</td>
                    <td className="py-3 px-4">{user?.displayName}</td>
                    <td className="py-3 px-4">{user?.email}</td>
                    <td className="py-3 px-4">{user?.phone || "N/A"}</td>
                    <td className="py-3 px-4">
                      {new Date(user?.createAt).toLocaleDateString("en-GB")}
                    </td>
                    <td className="py-3 px-4">{user?.id}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${user?.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-white"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-white"
                          }`}
                      >
                        {user?.status || "Not verified"}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex  gap-2">
                      <button
                        onClick={() => {
                        }}
                        className="text-blue-600 dark:text-blue-400 hover:scale-110 transition"
                      >
                        <FaUserEdit className="text-base" size={20} />
                      </button>
                      <Link
                        className="text-blue-600 dark:text-blue-400 hover:scale-110 transition"
                        to={`/dashboard/update-user/${user?.email}`}
                      >
                        <FaEdit className="text-base" size={20} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>
      </div>

    </>
  );
};

export default StudentList;
