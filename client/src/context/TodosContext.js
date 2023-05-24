import { createContext, useReducer } from 'react';

export const TodosContext = createContext();

export const todosReducer = (state, action) => {};

export const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, { todos: null });
  return <TodosContext.Provider value={{ ...state, dispatch }}>{children}</TodosContext.Provider>;
};
