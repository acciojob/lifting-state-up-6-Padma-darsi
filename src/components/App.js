import React, { useState } from "react";
import "../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  // Step 1: Initialize todos in parent
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: false },
    { id: 3, text: "Build Projects", completed: false },
  ]);

  // Step 2: Handler to mark todo as completed
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="App">
      <h2>Todo List (Lifting State Up Example)</h2>
      {/* Step 3: Pass data + handler to child */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
