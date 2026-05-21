import React, { useState, useEffect } from 'react';

const DateAndTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the state every second
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount to prevent memory leaks
    return () => clearInterval(timer);
  }, []);

  // Formatting options for macOS-like display
  const timeString = dateTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  const dateString = dateTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className="text-sm font-medium text-white cursor-pointer hover:bg-white/10 px-2 py-1 rounded">
      {timeString}
    </div>
  );
};

export default DateAndTime;