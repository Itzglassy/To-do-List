import React from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";

const CalendarView = ({ tasks }) => {
  const getTileClass = ({ date }) => {
    const formattedDate = format(date, "MM-dd-yyyy");
    const task = tasks.find((t) => t.deadline === formattedDate);

    if (task) {
      switch (task.priority) {
        case "High":
          return "calendar-high-priority";
        case "Medium":
          return "calendar-medium-priority";
        case "Low":
          return "calendar-low-priority";
        default:
          return "";
      }
    }
    return "";
  };

  return (
    <Calendar
      tileClassName={getTileClass}
    />
  );
};

export default CalendarView;
