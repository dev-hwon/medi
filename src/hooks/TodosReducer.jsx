export default function TodosReducer(todo, action) {
  switch (action.type) {
    case "TODOS_SUCCESS":
      const { data, objName, filter } = action;
      return {
        loading: false,
        errorMessage: "",
        todos: objName === "todos" && data,
        categorys:
          objName === "categorys" &&
          data.filter((list) => (filter ? list.id === filter : list)),
      };
    case "TODOS_ERROR": {
      return {
        loading: false,
        errorMessage: "Something went wrong!",
        categorys: "{}",
      };
    }
    case "TODOS_UPDATE": {
      const { adjData } = action;
      return {
        ...todo,
        todos: adjData,
      };
    }
    case "TODOS_DELETE": {
      return {
        loading: false,
        errorMessage: "",
        categorys: "",
      };
    }
    default: {
      throw Error(`알수 없는 액션 타입 : ${action.type}`);
    }
  }
}
