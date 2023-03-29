import React from "react";

export default function TodosHeader({ filters, filter, onFilterChange }) {
  return (
    <div className="todosHeader">
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={filter === value ? "active" : ""}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
