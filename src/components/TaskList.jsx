import React from "react";

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(index)}
          />
          <span>
            {task.taskName} - {task.deadline} @ {task.time}
          </span>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
