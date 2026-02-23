import React from 'react'

const MeetTeam = () => {
    const team = [
        {
            id: 1,
            name: "Ariful Islam",
            role: "Founder & CEO",
            image: "https://i.pravatar.cc/300?img=1",
        },
        {
            id: 2,
            name: "Rahim Ahmed",
            role: "Lead Developer",
            image: "https://i.pravatar.cc/300?img=2",
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            role: "UI/UX Designer",
            image: "https://i.pravatar.cc/300?img=3",
        },
    ];
    return (
        <div className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                            />
                            <h4 className="text-xl font-semibold">{member.name}</h4>
                            <p className="text-gray-500 dark:text-gray-400">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MeetTeam