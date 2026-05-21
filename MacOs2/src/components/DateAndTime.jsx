import React, { useState, useEffect } from 'react';

/* DATE AND TIME: Displays both date and time in the macOS navbar style.
   - Real macOS shows "Thu May 21  3:45 PM" format in the top-right
   - Previously only showed time; now includes the short date alongside it */
const DateAndTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* macOS-style formatting: "Thu May 21" for date, "3:45 PM" for time */
  const timeString = dateTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  const dateString = dateTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className="text-sm font-medium text-white cursor-pointer hover:bg-white/10 px-2 py-1 rounded flex gap-2">
      <span>{dateString}</span>
      <span>{timeString}</span>
    </div>
  );
};

export default DateAndTime;