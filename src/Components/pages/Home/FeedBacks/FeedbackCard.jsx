import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const FeedbackCard = ({ singleFeedback }) => {
    const { name, role, feedback, avatar, rating } = singleFeedback;
    return (
        <div className="bg-white shadow-md rounded-xl p-6 mx-auto">
            {/* Header: Avatar and Name */}
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                    {avatar}
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm text-gray-400">{role}</p>
                </div>
            </div>

            {/* Feedback Text */}
            <p className="text-gray-700 mb-4 relative pl-6">
                <FaQuoteRight className="absolute left-0 top-0 text-green-500" />
                {feedback}
            </p>

            {/* Rating Stars */}
            <div className="flex mt-2">
                {Array.from({ length: rating }).map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-400 mr-1" />
                ))}
            </div>
        </div>
    );
};

export default FeedbackCard;
