import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            margin: "10px 0",
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "6px",
            backgroundColor: todo.completed ? "#d4edda" : "#f8d7da",
          }}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              fontWeight: "500",
            }}
          >
            {todo.text}
          </span>
          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
              style={{
                marginLeft: "15px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;

