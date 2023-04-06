import React from "react";
import TodoList from "@/src/components/todos/TodoList";
import { DatasContext, DatasDispatchContext } from "@/src/context/Golbal";
import { useContext } from "react";
import Layout from "../layouts/Layout";
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
          할일관리
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

TodosIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
