import { useState } from "react";
import { ChevronRight, Lock, Play } from "lucide-react";

// 🔥 Demo Course Data (Your DB structure)

const demoCourse = {
    title: "Physics Course",
    course_contents: [
        {
            topic: "HTML Basics",
            contents: [
                {
                    contentName: "Intro to HTML",
                    contentLink: "https://example.com/1",
                },
                {
                    contentName: "HTML Tags",
                    contentLink: "https://example.com/2",
                },
            ],
        },
        {
            topic: "CSS Basics",
            contents: [
                {
                    contentName: "Intro to CSS",
                    contentLink: "https://example.com/3",
                },
            ],
        },
    ],
};

// 🔁 Transform Function
const transformCourseData = (course) => {
    return {
        topics: course?.course_contents?.map((item, index) => ({
            id: index,
            title: item.topic,
            sub_topics: item.contents?.map((content, i) => ({
                id: `${index}-${i}`,
                title: content.contentName,
                active: i === 0,
            })),
        })),
    };
};

export default function CourseOutlineTab() {
    const [activeModule, setActiveModule] = useState(null);

    const course = transformCourseData(demoCourse);

    const toggleModule = (moduleId) => {
        setActiveModule(activeModule === moduleId ? null : moduleId);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex">
            <div className="w-full bg-white dark:bg-slate-800">
                <div className="p-4 space-y-3">

                    {course?.topics?.map((module, index) => (
                        <div
                            key={module.id}
                            className="bg-gray-50 dark:bg-slate-700 rounded-lg border"
                        >
                            {/* Module */}
                            <button
                                onClick={() => toggleModule(module.id)}
                                className="w-full flex justify-between p-4 text-left"
                            >
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Module {index + 1}
                                    </p>
                                    <h3 className="font-semibold">{module.title}</h3>
                                </div>

                                <ChevronRight
                                    className={`transition ${activeModule === module.id ? "rotate-90" : ""
                                        }`}
                                />
                            </button>

                            {/* Lessons */}
                            {activeModule === module.id && (
                                <div className="border-t">
                                    {module.sub_topics.map((lesson) => (
                                        <div
                                            key={lesson.id}
                                            className="flex justify-between p-4 hover:bg-gray-100"
                                        >
                                            <div className="flex items-center gap-3">
                                                {lesson.active ? (
                                                    <Play size={16} />
                                                ) : (
                                                    <div className="w-4 h-4 bg-gray-300 rounded-full" />
                                                )}

                                                <span>{lesson.title}</span>
                                            </div>

                                            <Lock size={16} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}