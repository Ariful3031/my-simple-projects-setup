export default function TimeSlots({ selectedDate }) {
    if (!selectedDate?.day) {
        return (
            <p className="text-center opacity-60 mt-20">
                Select a date
            </p>
        );
    }

    return (
        <>
            <h3 className="font-semibold mb-4">
                {selectedDate.day} /
                {selectedDate.month + 1} /
                {selectedDate.year}
            </h3>

            <div className="space-y-3">
                {["16:00", "16:30", "17:00"].map(time => (
                    <button key={time} className="btn btn-outline w-full">
                        {time}
                    </button>
                ))}
            </div>
        </>
    );
}
