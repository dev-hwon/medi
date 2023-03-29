import React, { useEffect, useState } from "react";
import Addtodo from "../../components/todos/Addtodo";
import TodoList from "../../components/todos/TodoList";

export default function TodoIndex({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleupdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      <ul>
        {filtered.map((item) => (
          <TodoList
            key={item.id}
            todo={item}
            onUpdate={handleupdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <Addtodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
