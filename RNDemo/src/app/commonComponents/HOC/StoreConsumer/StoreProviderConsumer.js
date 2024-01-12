import React, { useState } from "react";

const StoreContext = React.createContext();

const StoreProvider = props => {
  const [state, updateState] = useState({ injectReducer: props.injectReducer });
  return (
    <StoreContext.Provider value={{ ...state }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const Consumer = StoreContext.Consumer;
export const Provider = StoreProvider;