
import { useState } from "react";

export default function Calendar({ onSelectDate }) {
    const today = new Date();

    const [currentDate, setCurrentDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );
    const [selectedDay, setSelectedDay] = useState(null);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // ✅ Allowed weekdays → MON, TUE, THU
    const selectableWeekDays = [1, 2, 4];

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const isCurrentMonth =
        year === today.getFullYear() && month === today.getMonth();

    // ⛔ Previous month disable
    const prevMonth = () => {
        if (!isCurrentMonth) {
            setCurrentDate(new Date(year, month - 1, 1));
            setSelectedDay(null);
        }
    };

    // ✅ Next month allowed
    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
        setSelectedDay(null);
    };

    const handleSelect = (day) => {
        const clickedDate = new Date(year, month, day);
        const weekDay = clickedDate.getDay();

        if (
            clickedDate < today ||
            !selectableWeekDays.includes(weekDay)
        ) {
            return;
        }

        setSelectedDay(day);
        onSelectDate?.({ day, month, year });
    };

    return (
        <div className="max-w-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={prevMonth}
                    disabled={isCurrentMonth}
                    className="btn btn-sm btn-ghost disabled:opacity-30"
                >
                    ❮
                </button>

                <h3 className="font-semibold">
                    {monthNames[month]} {year}
                </h3>

                <button onClick={nextMonth} className="btn btn-sm btn-ghost">
                    ❯
                </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 text-center text-xs font-semibold mb-2">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(d => (
                    <div key={d}>{d}</div>
                ))}
            </div>

            {/* Calendar */}
            <div className="grid grid-cols-7 gap-2 text-center">
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}

                {Array.from({ length: totalDays }).map((_, i) => {
                    const day = i + 1;
                    const dateObj = new Date(year, month, day);
                    const weekDay = dateObj.getDay();

                    const isPast = dateObj < today;
                    const isSelectable = selectableWeekDays.includes(weekDay) && !isPast;
                    const isSelected = selectedDay === day;
                    const isToday =
                        day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

                    return (
                        <button
                            key={day}
                            disabled={!isSelectable}
                            onClick={() => handleSelect(day)}
                            className={`
                relative btn btn-sm
                ${!isSelectable && "btn-disabled opacity-30"}
                ${isSelectable && !isSelected && "bg-gray-100 text-black"}
                ${isSelected && "bg-green-500 text-white"}
              `}
                        >
                            {day}

                            {/* 🔵 Today indicator */}
                            {isToday && (
                                <span className="absolute bottom-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}





// import { useState } from "react";

// export default function Calendar({ onSelectDate }) {
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [selectedDay, setSelectedDay] = useState(null);

//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();

//     // ✅ যেসব day selectable (MON, TUE, THU)
//     const selectableWeekDays = [1, 2, 4];
//     // 0=SUN, 1=MON, 2=TUE, 3=WED, 4=THU, 5=FRI, 6=SAT

//     const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December",
//     ];

//     const firstDay = new Date(year, month, 1).getDay();
//     const totalDays = new Date(year, month + 1, 0).getDate();

//     const prevMonth = () => {
//         setCurrentDate(new Date(year, month - 1, 1));
//         setSelectedDay(null);
//     };

//     const nextMonth = () => {
//         setCurrentDate(new Date(year, month + 1, 1));
//         setSelectedDay(null);
//     };

//     const handleSelect = (day) => {
//         const weekDay = new Date(year, month, day).getDay();

//         if (!selectableWeekDays.includes(weekDay)) return;

//         setSelectedDay(day);
//         onSelectDate?.({ day, month, year, weekDay });
//     };

//     return (
//         <div>
//             {/* Header */}
//             <div className="flex justify-between items-center mb-4">
//                 <button onClick={prevMonth} className="btn btn-sm btn-ghost">❮</button>
//                 <h3 className="font-semibold">
//                     {monthNames[month]} {year}
//                 </h3>
//                 <button onClick={nextMonth} className="btn btn-sm btn-ghost">❯</button>
//             </div>

//             {/* Week days */}
//             <div className="grid grid-cols-7 text-center text-xs font-semibold mb-2">
//                 {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(day => (
//                     <div key={day}>{day}</div>
//                 ))}
//             </div>

//             {/* Calendar grid */}
//             <div className="grid grid-cols-7 gap-2 text-center">
//                 {Array.from({ length: firstDay }).map((_, i) => (
//                     <div key={`empty-${i}`} />
//                 ))}

//                 {Array.from({ length: totalDays }).map((_, i) => {
//                     const day = i + 1;
//                     const weekDay = new Date(year, month, day).getDay();

//                     const isSelectable = selectableWeekDays.includes(weekDay);
//                     const isSelected = selectedDay === day;

//                     return (
//                         <button
//                             key={day}
//                             disabled={!isSelectable}
//                             onClick={() => handleSelect(day)}
//                             className={`
//                 btn btn-sm
//                 ${!isSelectable && "btn-disabled opacity-30"}
//                 ${isSelectable && !isSelected && "bg-gray-100 text-black"}
//                 ${isSelected && "bg-green-500 text-white"}
//               `}
//                         >
//                             {day}
//                         </button>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }



// import { useState } from "react";

// export default function Calendar({ onSelectDate }) {
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [selectedDay, setSelectedDay] = useState(null);

//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();

//     // ✅ যেসব date select করা যাবে
//     const selectableDates = [3, 7, 10, 15, 20, 25];

//     const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December",
//     ];

//     const firstDay = new Date(year, month, 1).getDay();
//     const totalDays = new Date(year, month + 1, 0).getDate();

//     const prevMonth = () => {
//         setCurrentDate(new Date(year, month - 1, 1));
//         setSelectedDay(null);
//     };

//     const nextMonth = () => {
//         setCurrentDate(new Date(year, month + 1, 1));
//         setSelectedDay(null);
//     };

//     const handleSelect = (day) => {
//         if (!selectableDates.includes(day)) return;

//         setSelectedDay(day);
//         onSelectDate?.({ day, month, year });
//     };

//     return (
//         <div>
//             {/* Header */}
//             <div className="flex justify-between items-center mb-4">
//                 <button onClick={prevMonth} className="btn btn-sm btn-ghost">❮</button>
//                 <h3 className="font-semibold">
//                     {monthNames[month]} {year}
//                 </h3>
//                 <button onClick={nextMonth} className="btn btn-sm btn-ghost">❯</button>
//             </div>

//             {/* Day names */}
//             <div className="grid grid-cols-7 text-center text-xs font-semibold mb-2">
//                 {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(day => (
//                     <div key={day}>{day}</div>
//                 ))}
//             </div>

//             {/* Calendar grid */}
//             <div className="grid grid-cols-7 gap-2 text-center">
//                 {/* Empty slots */}
//                 {Array.from({ length: firstDay }).map((_, i) => (
//                     <div key={`empty-${i}`} />
//                 ))}

//                 {/* Days */}
//                 {Array.from({ length: totalDays }).map((_, i) => {
//                     const day = i + 1;
//                     const isSelectable = selectableDates.includes(day);
//                     const isSelected = selectedDay === day;

//                     return (
//                         <button
//                             key={day}
//                             disabled={!isSelectable}
//                             onClick={() => handleSelect(day)}
//                             className={`
//                 btn btn-sm
//                 ${!isSelectable && "btn-disabled opacity-30"}
//                 ${isSelectable && !isSelected && "bg-gray-100 text-black"}
//                 ${isSelected && "bg-green-500 text-white"}
//               `}
//                         >
//                             {day}
//                         </button>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }
