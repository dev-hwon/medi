import { createContext, useReducer } from "react";
const initialUser = { name: "Guest" };

export const UserContext = createContext();
export const UserDispatchContext = createContext();

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

export function UserContextProvider({ children }) {
  const [user, userDispatch] = useReducer(userReducer, initialUser);
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={userDispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
