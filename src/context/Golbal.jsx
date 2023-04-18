import { useCallback, useEffect, createContext, useReducer } from "react";
const sampleJSON = `${process.env.NEXT_PUBLIC_JSONSERVER_SAMPLE}`;
const todosUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_TODOS}`;
const categorysUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_CATEGORYS}`;
const authorsUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_AUTHORS}`;
const boardlistsUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_BOARDLISTS}`;
const initialTheme = "dark";
const initialUser = { name: "Guest" };
const initialData = {
  loading: true,
  errorMessage: "",
  datas: [],
};
export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();
export const UserContext = createContext();
export const UserDispatchContext = createContext();
export const TodosContext = createContext();
export const TodosDispatchContext = createContext();
export const CategorysContext = createContext();
export const CategorysDispatchContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state === "light" ? "dark" : "light";
    case "DARK":
      return "dark";
    case "LIGHT":
      return "light";
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function userReducer(state, action) {
  switch (action.type) {
    case "LOGOUT":
      return { ...state, name: initialUser.name };
    case "NAME_UPDATE":
      return { ...state, name: action.newUserName };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function todosReducer(state, action) {
  switch (action.type) {
    case "SUCCESS":
      const { data } = action;
      return {
        loading: false,
        errorMessage: "",
        datas: data ? data : [...state.data],
      };
    case "TODOS_ADD": {
      const { adjData } = action;
      return {
        ...state,
        datas: [...state.datas, adjData],
      };
    }
    case "TODOS_MODIFY": {
      const { id, todosStatus, completeDate, completeTime } = action;
      return {
        ...state,
        datas: state.todos.map((data) =>
          data.id === id
            ? { ...data, todosStatus, completeDate, completeTime }
            : data
        ),
      };
    }
    // 반복업무 자동일감생성...인데 나중에 작업예정..
    case "TODOS_ADD_REPEAT": {
      const { id, todosDate } = action;
      return {
        ...state,
        datas: [...state.datas, id, todosDate],
      };
    }
    case "TODOS_DELETE": {
      return {
        loading: false,
        errorMessage: "",
        datas: "",
      };
    }
    case "ERROR": {
      return {
        loading: false,
        errorMessage: "Something went wrong!",
        datas: [],
      };
    }
    default: {
      throw Error(`알수 없는 액션 타입 : ${action.type}`);
    }
  }
}

function categorysReducer(state, action) {
  switch (action.type) {
    case "SUCCESS":
      const { data } = action;
      return {
        loading: false,
        errorMessage: "",
        datas: data ? data : [...state.datas],
      };
    case "ERROR": {
      return {
        loading: false,
        errorMessage: "Something went wrong!",
        datas: [],
      };
    }
    case "CATEGORYS_UPDATE": {
      const { id, name, color } = action;
      // const ddd = state.map((d) => d.id === "todos")
      return {
        ...state,
        datas: state.datas.map((list) =>
          list.id === id ? { ...list, name, color } : list
        ),
      };
    }
    default: {
      throw Error(`알수 없는 액션 타입 : ${action.type}`);
    }
  }
}
// function authorsReducer(state, action) {
//   switch (action.type) {
//     case "AUTHORS_UPDATE": {
//       const { addTarget } = action;
//       return {
//         ...state,
//         authors: [...state.authors, addTarget],
//       };
//     }
//     case "AUTHORS_DELETE": {
//       const { authors, deleteTarget } = action;
//       return {
//         ...state,
//         authors: authors.filter((a) => a.id !== deleteTarget.id),
//       };
//     }
//     default: {
//       throw Error(`알수 없는 액션 타입 : ${action.type}`);
//     }
//   }
// }

export function GlobalContextProvider({ children }) {
  const [theme, themeDispatch] = useReducer(themeReducer, initialTheme);
  const [user, userDispatch] = useReducer(userReducer, initialUser);
  const [todos, todosDispatch] = useReducer(todosReducer, initialData);
  const [categorys, categorysDispatch] = useReducer(
    categorysReducer,
    initialData
  );

  // async function fetchData(url) {
  //   const respons = await fetch(url);
  //   const result = await respons.json();
  //   return result;
  // }
  useEffect(() => {
    fetch(todosUrl)
      .then((res) => res.json())
      .then((res) => {
        const data = res;
        todosDispatch({ type: "SUCCESS", data });
      })
      .catch(() => {
        todosDispatch({ type: "ERROR" });
      });
  }, [todosDispatch]);

  // 데이터 분리호출할예정!!
  // 글쓴이 이제 호출안함!!

  useEffect(() => {
    fetch(categorysUrl)
      .then((res) => res.json())
      .then((res) => {
        const data = res;
        categorysDispatch({ type: "SUCCESS", data });
      })
      .catch(() => {
        categorysDispatch({ type: "ERROR" });
      });
    // fetch(authorsUrl)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     const authorsData = res;
    //     dataDispatch({ type: "SUCCESS", authorsData });
    //   })
    //   .catch(() => {
    //     dataDispatch({ type: "ERROR" });
    //   });
  }, [categorysDispatch]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={themeDispatch}>
        <TodosContext.Provider value={todos}>
          <TodosDispatchContext.Provider value={todosDispatch}>
            {todos.loading ? (
              "loading.."
            ) : (
              <CategorysContext.Provider value={categorys}>
                <CategorysDispatchContext.Provider value={categorysDispatch}>
                  <UserContext.Provider value={user}>
                    <UserDispatchContext.Provider value={userDispatch}>
                      {categorys.loading ? "loading.." : children}
                      {categorys.errorMessage ? categorys.errorMessage : null}
                    </UserDispatchContext.Provider>
                  </UserContext.Provider>
                </CategorysDispatchContext.Provider>
              </CategorysContext.Provider>
            )}
            {todos.errorMessage ? todos.errorMessage : null}
          </TodosDispatchContext.Provider>
        </TodosContext.Provider>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}
