import React from 'react'

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "Expert Instructors",
            desc: "Learn from industry experts with real-world experience.",
        },
        {
            id: 2,
            title: "Flexible Learning",
            desc: "Access courses anytime, anywhere at your own pace.",
        },
        {
            id: 3,
            title: "Affordable Pricing",
            desc: "High quality courses at student-friendly prices.",
        },
    ];
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md"
                        >
                            <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs