import React from 'react'

const OurStory = () => {
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Our journey started with a simple mission — to make education
                        accessible and affordable for everyone. We believe learning should
                        not have limits.
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="Story"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default OurStory