import React from "react";
import { parseISO, differenceInDays } from "date-fns";

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  const checkIfNearDeadline = (deadline) => {
    const today = new Date();
    const taskDate = parseISO(deadline);
    const daysDifference = differenceInDays(taskDate, today);
    return daysDifference >= 0 && daysDifference <= 2; // Within 2 days of deadline
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "high-priority";
      case "Medium":
        return "medium-priority";
      case "Low":
        return "low-priority";
      default:
        return "";
    }
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => {
        const nearDeadline = checkIfNearDeadline(task.deadline);
        const priorityClass = getPriorityClass(task.priority);

        return (
          <li
            key={index}
            className={`task-item ${priorityClass} ${
              nearDeadline ? "near-deadline" : ""
            } ${task.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(index)}
            />
            <span>
              <b>{task.taskName}</b> - {task.deadline} @ {task.time} 
              <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                ({task.priority} Priority)
              </span>
              {nearDeadline && (
                <span style={{ color: "red", marginLeft: "10px" }}>
                  ⚠️ Near Deadline!
                </span>
              )}
            </span>
            <button onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
