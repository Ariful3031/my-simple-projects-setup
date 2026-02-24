import React, { useState } from 'react'

const InstructorFilterBar = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search instructor..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border dark:bg-gray-800 dark:text-white"
                />

                <select className="px-4 py-3 rounded-lg border dark:bg-gray-800 dark:text-white">
                    <option>All Categories</option>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>UI/UX</option>
                </select>
            </div>
        </div>
    );
}

export default InstructorFilterBar