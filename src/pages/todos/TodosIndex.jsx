import React from "react";
import { useContext } from "react";
import TodoList from "../../components/todos/TodoList";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
const todosyUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
const categoryUrl = `${process.env.REACT_APP_TEST_JSONSERVER_CATEGORYS}`;

export default function TodosIndex({ filter }) {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, todos, categorys } = dataList;

  const todosfiltered = todos.filter((f) => f.category === filter);
  const categorysfiltered = categorys.filter((f) => f.id === filter);
  return (
    <>
      {loading ? (
        "loading.."
      ) : (
        <div className="">
          <div className="">
            {categorysfiltered.map((dd) => (
              <div key={dd.id}>{dd.name}</div>
            ))}
          </div>
          <ul>
            {todosfiltered.map((dd) => (
              <TodoList key={dd.id} todo={dd} />
            ))}
          </ul>
        </div>
      )}
      {errorMessage ? errorMessage : null}
    </>
  );
}
