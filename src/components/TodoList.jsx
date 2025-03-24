import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CalendarView from "./CalendarView";
import { useLocation } from 'react-router-dom';



const TodoList = () => {
  const location = useLocation();
  const userName = location.state?.userName || 'User';
  const [tasks, setTasks] = useState([
    { taskName: "", deadline: "dd-mm-yyyy", time: "", completed: false }
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  
    const addTask = (task) => {
      setTasks([...tasks, task]);
    };
  
    const toggleComplete = (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <div className="app-container">
        <h2>{`Hi, ${userName}!`}</h2>
        <h1>To-Do List</h1>
        <AddTask onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onDeleteTask={deleteTask}
        />
        <CalendarView onDateChange={setSelectedDate} tasks={tasks} />
      </div>
    );
  };
      

export default TodoList;
