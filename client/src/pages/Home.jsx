import { useEffect } from 'react';
import { useTodosContext } from '../hooks/useTodosContext';
import TodoContent from '../components/atoms/TodoContent';
import FormTodo from '../components/molucules/FormTodo';
import ThereisNoTodo from '../components/molucules/ThereisNoTodo';

const Home = () => {
  const { todos, dispatch } = useTodosContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('api/todo');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_TODOS', payload: json });
      }
    };
    fetchTodos();
  }, [dispatch]);

  return (
    <div className="container mx-auto lg:w-[70%] w-[85%] py-10 md:py-20">
      <FormTodo />
      <h2 className="text-2xl font-bold text-zinc-800 mb-10">Your Todo List</h2>
      {todos.length === 0 ? (
        <ThereisNoTodo />
      ) : (
        todos.map((todo) => {
          return <TodoContent key={todo._id} todo={todo} />;
        })
      )}
    </div>
  );
};

export default Home;
