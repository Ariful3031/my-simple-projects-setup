

import { useEffect, useState } from "react";
import {
    Trash2,
    Save,
    ChevronDown,
    ChevronRight,
} from "lucide-react";
import Swal from "sweetalert2";
import {
    useGetCourseListQuery,
    useUpdateCourseOutlineMutation,
} from "../../../../redux/api/couresApi";

export default function AddCourseOutline() {
    const { data: allCoursesData } = useGetCourseListQuery();
    const [updateOutline, { isLoading }] = useUpdateCourseOutlineMutation();

    const [selectedCourse, setSelectedCourse] = useState("");
    const [outline, setOutline] = useState({ course: "", topic: [] });
    const [originalOutline, setOriginalOutline] = useState([]);

    const [editingTopic, setEditingTopic] = useState(null);
    const [editingSubtopic, setEditingSubtopic] = useState(null);
    const [expandedTopics, setExpandedTopics] = useState(new Set([0]));

    // ✅ CHANGE DETECTOR
    const isChanged =
        JSON.stringify(outline.topic) !== JSON.stringify(originalOutline);

    // 🔄 LOAD DATA
    useEffect(() => {
        if (selectedCourse && allCoursesData) {
            const course = allCoursesData.find(
                (c) => c.id === selectedCourse
            );

            const topics = course?.topics || [];

            setOutline({
                course: selectedCourse,
                topic: topics,
            });

            setOriginalOutline(topics); // 🔥 original copy
        } else {
            setOutline({ course: "", topic: [] });
            setOriginalOutline([]);
        }
    }, [selectedCourse, allCoursesData]);

    // 🔽 TOGGLE
    const toggleTopic = (index) => {
        const newExpanded = new Set(expandedTopics);
        newExpanded.has(index)
            ? newExpanded.delete(index)
            : newExpanded.add(index);
        setExpandedTopics(newExpanded);
    };

    // ➕ ADD TOPIC
    const addTopic = () => {
        const newIndex = outline.topic.length;
        setOutline((prev) => ({
            ...prev,
            topic: [...prev.topic, { title: "", sub_topics: [] }],
        }));
        setExpandedTopics((prev) => new Set([...prev, newIndex]));
        setEditingTopic(newIndex);
    };

    // ❌ DELETE TOPIC
    const deleteTopic = (index) => {
        setOutline((prev) => ({
            ...prev,
            topic: prev.topic.filter((_, i) => i !== index),
        }));
    };

    // ✏️ UPDATE TOPIC
    const updateTopicTitle = (index, title) => {
        setOutline((prev) => ({
            ...prev,
            topic: prev.topic.map((t, i) =>
                i === index ? { ...t, title } : t
            ),
        }));
    };

    // ➕ ADD SUBTOPIC
    const addSubtopic = (topicIndex) => {
        setOutline((prev) => ({
            ...prev,
            topic: prev.topic.map((t, i) =>
                i === topicIndex
                    ? {
                        ...t,
                        sub_topics: [...t.sub_topics, { title: "" }],
                    }
                    : t
            ),
        }));

        setEditingSubtopic({
            topicIndex,
            subtopicIndex: outline.topic[topicIndex].sub_topics.length,
        });
    };

    // ❌ DELETE SUBTOPIC
    const deleteSubtopic = (topicIndex, subtopicIndex) => {
        setOutline((prev) => ({
            ...prev,
            topic: prev.topic.map((t, i) =>
                i === topicIndex
                    ? {
                        ...t,
                        sub_topics: t.sub_topics.filter(
                            (_, j) => j !== subtopicIndex
                        ),
                    }
                    : t
            ),
        }));
    };

    // ✏️ UPDATE SUBTOPIC
    const updateSubtopicTitle = (topicIndex, subtopicIndex, title) => {
        setOutline((prev) => ({
            ...prev,
            topic: prev.topic.map((t, i) =>
                i === topicIndex
                    ? {
                        ...t,
                        sub_topics: t.sub_topics.map((s, j) =>
                            j === subtopicIndex ? { ...s, title } : s
                        ),
                    }
                    : t
            ),
        }));
    };

    // 💾 SAVE
    const handleSave = async () => {
        if (!selectedCourse) return;

        try {
            await updateOutline({
                courseId: selectedCourse,
                topics: outline.topic,
            }).unwrap();

            Swal.fire("Saved!", "Outline updated", "success");

            // 🔥 reset original after save
            setOriginalOutline(outline.topic);
        } catch (err) {
            Swal.fire("Error!", "Failed", "error");
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">

                {/* HEADER */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        Course Outline Manager
                    </h1>
                </div>

                {/* COURSE SELECT */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">

                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                        Select Course <span className="text-red-500">*</span>
                    </label>

                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                    >
                        <option value="">Select Course</option>
                        {allCoursesData?.map((c) => (
                            <option key={c._id} value={c.id}>
                                {c.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* TOPICS */}
                <div className="p-6 space-y-4">
                    <label className="block mt-1 mb-5 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Course Topics {outline?.topic?.length > 0 ? `(${outline.topic.length})` : ""}
                    </label>

                    {outline?.topic?.map((topic, topicIndex) => (
                        <div key={topicIndex} className="border border-gray-200 dark:border-gray-700 rounded">

                            {/* TOPIC HEADER */}
                            <div className="flex justify-between p-3 bg-gray-100 dark:bg-gray-700">
                                <div className="flex gap-2 items-center w-full text-gray-800 dark:text-gray-200">
                                    <button onClick={() => toggleTopic(topicIndex)}>
                                        {expandedTopics.has(topicIndex)
                                            ? <ChevronDown size={16} />
                                            : <ChevronRight size={16} />}
                                    </button>

                                    {editingTopic === topicIndex ? (
                                        <input
                                            value={topic.title}
                                            onChange={(e) =>
                                                updateTopicTitle(topicIndex, e.target.value)
                                            }
                                            onBlur={() => setEditingTopic(null)}
                                            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 w-full"
                                            autoFocus
                                        />
                                    ) : (
                                        <h3
                                            onClick={() => setEditingTopic(topicIndex)}
                                            className="cursor-pointer"
                                        >
                                            {topic.title || "Untitled Topic"}
                                        </h3>
                                    )}
                                </div>

                                <button onClick={() => deleteTopic(topicIndex)} className="text-red-500">
                                    <Trash2 size={14} />
                                </button>
                            </div>

                            {/* SUBTOPICS */}
                            {expandedTopics.has(topicIndex) && (
                                <div className="p-3 space-y-2 text-gray-800 dark:text-gray-200">
                                    {topic.sub_topics.map((sub, subIndex) => (
                                        <div key={subIndex} className="flex gap-2">
                                            {editingSubtopic?.topicIndex === topicIndex &&
                                                editingSubtopic?.subtopicIndex === subIndex ? (
                                                <input
                                                    value={sub.title}
                                                    onChange={(e) =>
                                                        updateSubtopicTitle(
                                                            topicIndex,
                                                            subIndex,
                                                            e.target.value
                                                        )
                                                    }
                                                    onBlur={() => setEditingSubtopic(null)}
                                                    className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 w-full"
                                                    autoFocus
                                                />
                                            ) : (
                                                <span
                                                    className="flex-1 cursor-pointer"
                                                    onClick={() =>
                                                        setEditingSubtopic({
                                                            topicIndex,
                                                            subtopicIndex: subIndex,
                                                        })
                                                    }
                                                >
                                                    {sub.title || "Untitled"}
                                                </span>
                                            )}

                                            <button
                                                onClick={() =>
                                                    deleteSubtopic(topicIndex, subIndex)
                                                }
                                                className="text-red-500"
                                            >
                                                <Trash2 size={12} />
                                            </button>
                                        </div>
                                    ))}

                                    <button
                                        onClick={() => addSubtopic(topicIndex)}
                                        className="text-sm text-blue-600 dark:text-blue-400"
                                    >
                                        + Add Subtopic
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* ADD TOPIC */}
                    {selectedCourse && (
                        <button
                            onClick={addTopic}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
                        >
                            + Add Topic
                        </button>
                    )}
                </div>

                {/* SAVE BUTTON */}
                <div className="p-6">
                    <button
                        onClick={handleSave}
                        disabled={!isChanged || !selectedCourse || isLoading}
                        className={`px-4 py-2 rounded text-white ${!isChanged || !selectedCourse
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        <Save size={16} className="inline mr-2" />
                        {isLoading ? "Saving..." : "Save Outline"}
                    </button>
                </div>
            </div>
        </div>

    );
}