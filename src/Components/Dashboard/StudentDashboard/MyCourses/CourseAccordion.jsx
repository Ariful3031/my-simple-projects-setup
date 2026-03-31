import { useState } from "react";
import { FaPlus, FaMinus, FaVideo } from "react-icons/fa";

export default function CourseAccordion({ contentsData }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

  console.log(contentsData)

    return (
        <div className="space-y-3">
            {contentsData?.map((module, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                    <div
                        onClick={() => toggle(index)}
                        className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
                    >
                        <h2 className="font-semibold text-gray-800">{module?.title}</h2>
                        {activeIndex === index ? <FaMinus className="text-pink-600" /> : <FaPlus />}
                    </div>

                    {activeIndex === index && (
                        <div className="bg-white p-4 space-y-3 border-t">
                            {module?.sub_topics?.map((content, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100"
                                >
                                    <div className="flex items-center gap-2">
                                        <FaVideo className="text-pink-600" />
                                        <span>{content?.title}</span>
                                    </div>
                                    <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded">BB</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}