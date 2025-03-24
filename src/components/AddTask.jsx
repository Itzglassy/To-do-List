import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && deadline && time) {
      onAddTask({ taskName, deadline, time, completed: false });
      setTaskName("");
      setDeadline("");
      setTime("");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
