import { createContext, useReducer } from "react";
const initialTheme = "dark";

export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();

function colorThemeReducer(state, action) {
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

export function ColorThemeContextProvider({ children }) {
  const [colorTheme, colorThemeDispatch] = useReducer(
    colorThemeReducer,
    initialTheme
  );
  return (
    <ThemeContext.Provider value={colorTheme}>
      <ThemeDispatchContext.Provider value={colorThemeDispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}
