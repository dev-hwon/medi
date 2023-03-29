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
  todos: [],
  categorys: [],
  authors: [],
  boardlists: [],
};
export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();
export const UserContext = createContext();
export const UserDispatchContext = createContext();
export const DatasContext = createContext();
export const DatasDispatchContext = createContext();

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

function dataReducer(state, action) {
  switch (action.type) {
    case "SUCCESS":
      const { todosData, categorysData, authorsData, boardlistsData } = action;
      return {
        loading: false,
        errorMessage: "",
        todos: todosData ? todosData : [...state.todos],
        categorys: categorysData ? categorysData : [...state.categorys],
        authors: authorsData ? authorsData : [...state.authors],
        boardlists: boardlistsData ? boardlistsData : [...state.boardlists],
      };
    case "ERROR": {
      return {
        loading: false,
        errorMessage: "Something went wrong!",
        datas: [],
      };
    }
    case "TODOS_ADD": {
      const { adjData } = action;
      return {
        ...state,
        todos: [...state.todos, adjData],
      };
    }
    // 반복업무 자동일감생성...인데 나중에 작업예정..
    case "TODOS_ADD_REPEAT": {
      const { id, todosDate } = action;
      return {
        ...state,
        todos: [...state.todos, id, todosDate],
      };
    }
    case "TODOS_DELETE": {
      return {
        loading: false,
        errorMessage: "",
        categorys: "",
      };
    }
    case "CATEGORYS_UPDATE": {
      const { id, name, color } = action;
      // const ddd = state.map((d) => d.id === "todos")
      return {
        ...state,
        categorys: state.categorys.map((list) =>
          list.id === id ? { ...list, name, color } : list
        ),
      };
    }
    case "AUTHORS_UPDATE": {
      const { addTarget } = action;
      return {
        ...state,
        authors: [...state.authors, addTarget],
      };
    }
    case "AUTHORS_DELETE": {
      const { authors, deleteTarget } = action;
      return {
        ...state,
        authors: authors.filter((a) => a.id !== deleteTarget.id),
      };
    }
    default: {
      throw Error(`알수 없는 액션 타입 : ${action.type}`);
    }
  }
}

export function GlobalContextProvider({ children }) {
  const [theme, themeDispatch] = useReducer(themeReducer, initialTheme);
  const [user, userDispatch] = useReducer(userReducer, initialUser);
  const [data, dataDispatch] = useReducer(dataReducer, initialData);

  const getTodos = useCallback(() => fetch(todosUrl).then((res) => res.json()));
  const getCategorys = useCallback(() =>
    fetch(categorysUrl).then((res) => res.json())
  );
  const getAuthors = useCallback(() =>
    fetch(authorsUrl).then((res) => res.json())
  );

  useEffect(() => {
    getTodos()
      .then((res) => {
        const todosData = res;
        dataDispatch({ type: "SUCCESS", todosData });
      })
      .catch(() => {
        dataDispatch({ type: "ERROR" });
      });
    getCategorys()
      .then((res) => {
        const categorysData = res;
        dataDispatch({ type: "SUCCESS", categorysData });
      })
      .catch(() => {
        dataDispatch({ type: "ERROR" });
      });
    getAuthors()
      .then((res) => {
        const authorsData = res;
        dataDispatch({ type: "SUCCESS", authorsData });
      })
      .catch(() => {
        dataDispatch({ type: "ERROR" });
      });
  }, []);

  // 로딩중.. 추후 부분적으로 적용예정 일단 전체에 걸어버림
  const { loading, errorMessage, datas } = data;

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={themeDispatch}>
        <DatasContext.Provider value={data}>
          <DatasDispatchContext.Provider value={dataDispatch}>
            <UserContext.Provider value={user}>
              <UserDispatchContext.Provider value={userDispatch}>
                {loading ? "loading.." : children}
                {errorMessage ? errorMessage : null}
              </UserDispatchContext.Provider>
            </UserContext.Provider>
          </DatasDispatchContext.Provider>
        </DatasContext.Provider>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}
