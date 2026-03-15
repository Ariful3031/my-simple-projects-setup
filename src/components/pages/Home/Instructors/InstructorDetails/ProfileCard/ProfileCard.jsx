//     _id: "6995b0d9032fd5f2933af69b",//
// photoURL: "https://img.freepik.com/free-vector/smiling-woman-with-glasses_1308-17…", // image
// displayName: "মাইদুল ইসলাম প্রধান (মুকুল)", // name
// emailVerified: false, //
// accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1MzMwMzNhMTMzYWQyM2EyYzlhZGNmYzE4YzRlM2…", //
// phoneNumber: "+8801712345678", // phone
// address: "ঢাকা, বাংলাদেশ",
// role: "student", //
// creationTime: "Wed, 18 Feb 2026 12:30:16 GMT", //
// lastSignInTime: "Wed, 18 Feb 2026 12:30:16 GMT", //


const ProfileCard = ({ teacher }) => {
    return (

        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 flex my-11 flex-col md:flex-row gap-8">

            <img
                src={teacher?.photoURL}
                alt={teacher?.displayName}
                className="w-48 h-48 rounded-full object-cover"
            />

            <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {teacher?.displayName}
                </h2>
                <p className="text-gray-800 dark:text-white">
                    {teacher?.jobTitle}
                </p>

                <p className="text-indigo-500 mt-2">
                    {teacher?.institute}
                </p>

                <div className="mt-6 flex flex-wrap gap-6 text-sm">
                    <span>⭐ {teacher?.rating}</span>
                    <span>👨‍🎓 {teacher?.totalStudents}+ Students</span>
                    <span>🏆 {teacher?.experience}+ Years</span>
                </div>
            </div>

        </div>

    );
};

export default ProfileCard;