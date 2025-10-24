import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            {todo.text}{" "}
            {todo.completed ? (
              <span>Completed</span>
            ) : (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;



