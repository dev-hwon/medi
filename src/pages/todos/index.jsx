import React from "react";
import { useContext } from "react";
import TodoList from "@/src/components/todos/TodoList";
import AiList from "@/src/components/todos/AiList";
import MainLayout from "@/src/layouts/main/MainLayout";
import { CategorysContext } from "@/src/context/Golbal";

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
  const categorysDataList = useContext(CategorysContext);
  const { loading, errorMessage, datas } = categorysDataList;
  return (
    <>
      {loading ? (
        "loading.."
      ) : (
        <div className="">
          헿 여긴 나중에...
          {/* <TodoList todos={todos} categorys={categorys} />
          <AiList /> */}
        </div>
      )}
      {errorMessage ? errorMessage : null}
    </>
  );
}
