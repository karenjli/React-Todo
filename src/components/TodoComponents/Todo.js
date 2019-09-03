import React from "react";

//const Todo = props => <h4>{props.task}</h4>;

const Todo = props => {
  return (
    <div
      className={`item${props.task.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.task)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};
export default Todo;
