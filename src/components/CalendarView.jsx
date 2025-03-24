import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ onDateChange, tasks }) => {
  // Function to add custom content to calendar tiles
  const tileContent = ({ date }) => {
    // Check if there are tasks for this date
    const taskForDate = tasks.find(
      (task) => new Date(task.deadline).toDateString() === date.toDateString()
    );
    return taskForDate ? (
      <div className="calendar-task">
        • {taskForDate.taskName}
      </div>
    ) : null;
  };

  return (
    <div className="calendar-view">
      <Calendar onChange={onDateChange} tileContent={tileContent} />
    </div>
  );
};

export default CalendarView;
