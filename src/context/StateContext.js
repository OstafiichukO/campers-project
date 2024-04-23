import React, { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Context.Provider
      value={{
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
