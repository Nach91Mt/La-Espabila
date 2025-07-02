import { createContext, use, useContext, useReducer, useState } from "react";
import storeReducer ,  { initialStore, initialImgStore,imgStoreReducer } from "./store";

const storeContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  const [imgStore,imgDispatch]=useReducer(imgStoreReducer, initialImgStore);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    console.log("User logged in:", user);
  };
  const logout = () => console.log("entro");

  return (
    <storeContext.Provider value={{ store, dispatch, logout, login, user,imgDispatch,imgStore }}>
      {children}
    </storeContext.Provider>
  );
}
export default function useGlobalReducer() {
  const { store, dispatch, login, logout,imgStore, imgDispatch  } = useContext(storeContext);
  return { store, dispatch, login, logout, imgDispatch, imgStore  };
}
