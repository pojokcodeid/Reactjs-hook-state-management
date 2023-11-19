import { useContext } from "react";
import { Context } from "./appState.jsx";

export const useAppState = () => {
  return useContext(Context);
};
