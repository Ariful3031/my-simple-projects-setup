import { useState } from "react";
import Calendar from "./Calendar";
import TimeSlots from "./TimeSlots";

export default function BookingCard() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="card w-4xl bg-base-100 shadow-xl grid grid-cols-3">
      
      {/* Left Info */}
      <div className="p-6 border-r">
        <h2 className="text-lg font-semibold">Zarin Rafa</h2>
        <p className="text-xl font-bold mt-2">30 Min Meeting</p>

        <div className="mt-4 space-y-2 text-sm">
          <p>⏱ 30m</p>
          <p>🎥 Google Meet</p>
          <p>🌏 Asia/Dhaka</p>
        </div>
      </div>

      {/* Calendar */}
      <div className="p-6 col-span-1">
        <Calendar onSelectDate={setSelectedDate} />
      </div>

      {/* Time Slots */}
      <div className="p-6 border-l">
        <TimeSlots selectedDate={selectedDate} />
      </div>

    </div>
  );
}
