import React from 'react'

const MissionVission = () => {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        To empower students worldwide by providing accessible,
                        high-quality education.
                    </p>
                </div>
                <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        To become the most trusted online learning platform globally.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MissionVission