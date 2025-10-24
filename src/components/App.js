import React, { useState } from "react";
import "../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  // Parent state (todos)
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: false },
    { id: 3, text: "Build Projects", completed: false },
  ]);

  // Handler to mark a todo as completed
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      {/* Do not remove this main div */}
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;

