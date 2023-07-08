import React from "react";
import Todolist from "../components/Todolist";
import { useRef, useEffect } from "react";
import "../stylesheets/Todoform.css";

export default function Todoform({
  inputvalue,
  onSubmit,
  onChange,
  todo,
  onDelete,
  onEdit,
  onClick,
}) {
  const inputFocus = useRef();

  useEffect(() => {
    inputFocus.current.focus();
  });

  function handleFocus() {
    inputFocus.current.focus();
  }
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          value={inputvalue}
          className="form-input"
          placeholder="Enter a task"
          onChange={onChange}
          ref={inputFocus}
        />
        <button type="submit" className="btn" onClick={handleFocus}>
          Add task
        </button>
      </form>
      <Todolist
        className="text-value"
        value={todo}
        onDelete={onDelete}
        onEdit={onEdit}
        click={onClick}
      />
    </div>
  );
}
