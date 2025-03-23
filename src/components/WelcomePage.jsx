import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/todo", { state: { userName: name } });
      }, 2000);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <p className='upper'>To-do List</p>
        <p>Your productivity companion!</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="welcome-input"
        />
        <button onClick={handleStart} className="welcome-button">
          {isLoading ? "Loading..." : "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
