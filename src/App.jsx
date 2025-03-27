import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import WelcomePage from './components/WelcomePage';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
