import { createContext, useReducer } from "react";
import { func, object } from "prop-types";

export const Context = createContext();
export function AppStateProvider({ reducer, initialState = {}, children }) {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

AppStateProvider.propTypes = {
  reducer: func,
  initialState: object,
  children: object,
};
