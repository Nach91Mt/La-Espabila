import { createContext, useContext } from "react";

const HeaderHeightContext = createContext(0);

export function useHeaderHeight() {
  return useContext(HeaderHeightContext);
}