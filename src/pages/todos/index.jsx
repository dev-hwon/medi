import React from "react";
import { useContext } from "react";
import TodoList from "@/src/components/todos/TodoList";
import AiList from "@/src/components/todos/AiList";
import MainLayout from "@/src/layouts/main/MainLayout";
import todosData from "../../db/todos.json";

// ----------------------------------------------------------------------
TodosIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

// export default function TodosIndex({ filter }) {
//   const dataList = useContext(DatasContext);
//   const dataDispatch = useContext(DatasDispatchContext);
//   const { loading, errorMessage, todos, categorys } = dataList;

//   const todosfiltered = todos.filter((f) => f.category === filter);
//   const categorysfiltered = categorys.filter((f) => f.id === filter);
//   return (
//     <>
//       {loading ? (
//         "loading.."
//       ) : (
//         <div className="">
//           할일관리
//           <div className="">
//             {categorysfiltered.map((dd) => (
//               <div key={dd.id}>{dd.name}</div>
//             ))}
//           </div>
//           <ul>
//             {todosfiltered.map((dd) => (
//               <TodoList key={dd.id} todo={dd} />
//             ))}
//           </ul>
//         </div>
//       )}
//       {errorMessage ? errorMessage : null}
//     </>
//   );
// }
export default function TodosIndex({ filter }) {
  const todosList = todosData.data.list;
  return <>dnfkfkfkfk</>;
}
