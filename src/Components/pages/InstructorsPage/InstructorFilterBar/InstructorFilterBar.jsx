import React, { useState } from 'react'
import { useGetAllUsersAdminQuery } from '../../../../redux/api/authApi';
import { FaSearch } from 'react-icons/fa';

const InstructorFilterBar = ({ searchTerm, setSearchTerm, categoryTerm, setCategoryTerm }) => {

    const { data, isLoading } = useGetAllUsersAdminQuery();
    const uniqueCategories = [
        ...new Set(
            data
                ?.map((user) => user?.categoryRole)
                .filter(Boolean)
        )
    ];




    return (
        <div className="py-8">
            {/* Filter Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {/* Search */}
                <div className="sm:col-span-2 lg:col-span-3">
                    <label className='text-xl font-bold'>Name & eamil:</label>



                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search by name or email"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full mt-1 px-10 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                        />

                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>

                </div>

                {/* Order By */}
                <div className="">
                    <label className='text-xl font-bold'>Subject:</label>

                    <select
                        value={categoryTerm}
                        onChange={(e) => setCategoryTerm(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                    >
                        <option value="">All</option>
                        {
                            uniqueCategories?.map((category) => (
                                <option value={category}>{category} </option>
                            ))
                        }
                    </select>
                </div>

            </div>
        </div>
    );
}

export default InstructorFilterBar