import React from "react";
import { FaTrashAlt } from "react-icons/fa";
export default function TodoList({ todo, onUpdate, onDelete }) {
  const { id, todosName, todosStatus, reple } = todo;
  // const handleChange = (e) => {
  //   const status = e.target.checked ? "completed" : "active";
  //   onUpdate({ ...todo, status });
  // };
  // const handleDelete = () => {
  //   onDelete(todo);
  // };
  return (
    <li>
      <button>{todosName}</button>
    </li>
  );
}
