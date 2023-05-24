import { TodosContext } from '../context/TodosContext';
import { useContext } from 'react';

export const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw Error('useTodosConteaxt must be used inside an TodosContextProvider');
  }
  return context;
};
