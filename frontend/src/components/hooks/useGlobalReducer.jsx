import { createContext, useContext, useReducer, useState } from "react";
import storeReducer, { initialStore } from "./store";

const storeContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    console.log("User logged in:", user);
  };
  const logout = () => console.log("entro");

  return (
    <storeContext.Provider value={{ store, dispatch, logout, login, user }}>
      {children}
    </storeContext.Provider>
  );
}
export default function useGlobalReducer() {
  const { store, dispatch, login, logout } = useContext(storeContext);
  return { store, dispatch, login, logout };
}
